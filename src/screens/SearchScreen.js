import React, {useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SearchScreen = () => {
    const [term, setTerm]=useState('')
    const[searchApi,results,errorMessage] = useResults()

    const filterResultsByPrice = (price)=> {
        //price ==="$" || "$$" || "$$$"
        return results.filter(result=>{
            return result.price===price
        })
    }
   
    
    
    return (<View>
        <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() =>searchApi(term)}
        />
        
       {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ResultsList title="Cost Effective" results={filterResultsByPrice("$")}/>
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")}/>
        <ResultsList title="Big Spender"results={filterResultsByPrice("$$$")}/>
    </View>
    )
}



const styles = StyleSheet.create({
    icon:{
        fontSize: 15
    }
})

export default SearchScreen
