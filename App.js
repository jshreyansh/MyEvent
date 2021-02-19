import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsScreen from './src/screens/ResultsShowScreen';
const navigator = createStackNavigator(
  {
    SearchScreen  : SearchScreen ,
    ResultsShow : ResultsScreen,
    
  },
  {
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);