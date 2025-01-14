import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native'

const ResultsList = ({title, results})=> {
    const navigation = useNavigation()
    if(!results.length){
        return null
    }
    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={({item}) =>{return (
                <TouchableOpacity 
                onPress={()=> navigation.navigate("ResultsShow",{id: item.id})}
                >
                    <ResultsDetail result={item} />
                    </TouchableOpacity>
            )}}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default ResultsList

//udemy 111-112