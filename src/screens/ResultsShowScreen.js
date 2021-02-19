import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button , TouchableOpacity} from 'react-native';





const ResultsShowScreen = ({ result }) => {
  return (
    <View style={styles.details} >

        <View style={{height:"50%",width:"90%",backgroundColor:"white", padding:20,borderRadius:30,margin:20,marginTop:20}}/>
      
      <Text style={styles.text}>
        Event name:  {"\n"}
        time:    
        {"            "} rating:  {"\n"}
        tags:       {"\n"}
        Audience    {"\n"}
        Fee:         {"\n"}
        Prize Pool:   
      </Text>
      <TouchableOpacity>
          <View style={styles.leaderBoardContainer}>
          <Text style={styles.GetLeaderBoard}>Get LeaderBoard</Text>
          </View>
              
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

    GetLeaderBoard:{
        marginTop:10,
        marginLeft:100,
        fontSize:20,
    },

    leaderBoardContainer:{
        borderColor:"white",
        width:"100%",
        height:50,
        borderRadius:30,
        borderWidth:2,
        backgroundColor:"#FCD34D",
        marginBottom:10,

    },
  text:{
    flex:1,
    fontWeight: 'bold',
    color:'white',
    fontSize:10,
    marginTop:20,
    fontSize:20,
    marginLeft:30,
    

  },
  details: {
    flex:1,
    backgroundColor: "#1E2D6C",
    borderWidth:1,
    borderColor:'white',
    marginVertical:10,
    justifyContent:'center',
    borderRadius: 10,
    height:200, 
  },
  
});

export default ResultsShowScreen;
