import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';



const ResultsDetail = ({ result }) => {
    
  return (<>
    <View style={styles.details}>

    
    
      <Text style={styles.name}> 
      Name : {result.name} {"\n"}
      Time : {result.time} {"\n"}
      rating : {result.rating} 
      </Text>

      
    </View>
    
    </>
  );
};

const styles = StyleSheet.create({
 
  name: {
    
    fontSize:14,
    color:'black',
    marginVertical:120,
    position:'absolute',
    marginLeft:5,
    
    

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  details: {
    backgroundColor: "white",
    borderWidth:1,
    borderColor:'black',
    marginVertical:3,
    borderRadius: 10,
    height:200,
    width:150,
    margin:10,
    marginVertical:5,
    padding:10,
    

    
  }


});

export default ResultsDetail;
