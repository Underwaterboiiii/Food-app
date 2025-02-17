import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name = 'search' style={styles.iconStyle}/>
        <TextInput 
            placeholder="search"
            style ={styles.inputStyle}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
         />
         
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
})

export default SearchBar