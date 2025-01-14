import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as FavoriteContext } from '../context/FavoriteContext';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FavoriteScreen = () => {
  const { state, removeFavorite } = useContext(FavoriteContext);
  const navigation = useNavigation();

  return (
    <View>
      {state.length === 0 ? (
        <Text style={styles.text}>There are no favorites saved</Text>
      ) : (
        <FlatList
          data={state}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                <Text style={styles.title}>{item.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeFavorite(item.id)}>
                <Feather name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Go to Search Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
  },
  title: { fontSize: 18 },
  text: { fontSize: 18, textAlign: 'center', margin: 20 },
  button: {
    padding: 10,
    margin: 20,
  },
  buttonText: { color: 'blue', textAlign: 'center', fontSize: 18 },
});
export default FavoriteScreen
