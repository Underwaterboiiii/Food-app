import React, {useState, useEffect, useContext} from 'react'
import {View, Image, StyleSheet, Text, FlatList, Button} from 'react-native'
import yelp from '../api/yelp'
import { Context as FavoriteContext } from '../context/FavoriteContext';

const ResultsShowScreen = ({route, navigation})=>{
    const { addFavorite } = useContext(FavoriteContext);
    const id = route.params.id
    const [result, setResult] = useState(null)

const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
}

const getFavorite = () => {
    addFavorite({ id, name: result.name });
    navigation.navigate("Favorite");
  };

useEffect(()=>{
    getResult(id)
}, [])


if(!result){
    return null
}
    return <View>
        <Text style={styles.rName}>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
       />
        <Text style = {styles.rest}>
               Address: {result.location.display_address.join(', ')}
            </Text>
      <Text style = {styles.rest}>Phone: {result.phone}</Text>
      <Button title="Add to Favorites" onPress={getFavorite} />
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    },
    rName: {
        fontWeight: 'bold',
        fontSize: 19,
        height: 25
    },
    rest: {
        fontSize: 15,
        height: 20
    }

})

export default ResultsShowScreen