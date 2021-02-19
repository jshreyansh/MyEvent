import React,{useState} from "react";
import { Text, StyleSheet,View,Button,ScrollView } from "react-native";
import SearchBar from '../components/searchBar';
import ResultsList from '../components/ResultsList';



const SearchScreen = props => {
  console.log(props)
  const[term,setTerm]=useState('');
  return <View style={styles.page} >
      
      <SearchBar 
      term={term} 
      onTermChange={(newTerm)=>setTerm(newTerm)} 
      onTermSubmit={()=>alert("fetching data")}

      />
      <ScrollView>

      <ResultsList results={[{name:'xyz',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'plq',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb2',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb23',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb4',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb5',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb6',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb7',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb78',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb8',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
            {name:'mnb9',time:"11 pm",rating:"⭐⭐⭐⭐⭐"},
        ]} 
        title="My Events" routes={props.navigation} />
        </ScrollView>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  page:{
    flex:1,
    alignItems:"center",
    backgroundColor: '#594894',
    paddingBottom:10,
 
    

    

  },
  

});

export default SearchScreen;