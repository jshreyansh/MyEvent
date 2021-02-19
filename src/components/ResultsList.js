import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { withOrientation } from 'react-navigation';

import ResultsShowScreen from '../screens/ResultsShowScreen';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, routes }) => {

  console.log("------------------------------",routes)


  return (
    <View >
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={result => result.name}
        numColumns = {2}
        columnWrapperStyle = {{justifyContent: 'space-between'}}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              
                onPress={()=> {routes.navigate('ResultsShow')}}
            >
              <ResultsDetail result={item} />
              
            </TouchableOpacity>
          );
        }}
      />
      {/* <ResultsShowScreen result={results}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
    padding:10,
    marginLeft:125,

  }
});

export default ResultsList;