import React from "react";
import { Text, StyleSheet,View,TextInput,Button } from "react-native";



const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  
  return <View style={styles.background}>
      <TextInput 
      style={styles.inputStyle}
      placeholder='Search'
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit} 

      />
  
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  background: {
      marginTop:15,
      backgroundColor:'white',
      height:45,
      borderRadius:10,
      marginHorizontal:15,
      flexDirection:'row'

  },

  inputStyle:{
      flex:2,
      fontSize:20
  },

  iconStyle:{
      fontSize:37,
      alignSelf:"center",
      marginHorizontal:15

  }


});

export default SearchBar;