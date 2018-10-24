import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import HomeScreen from './src/componenet/Home'
import DetailScreen from './src/componenet/Detail'
import ProfileScreen from './src/componenet/Profile'
import { Icon } from 'react-native-elements'

const HomeStack = createStackNavigator({
  Home:{screen: HomeScreen},
  Detail:{screen: DetailScreen} 
});

const ProfileStack = createStackNavigator({
  Profile:{screen: ProfileScreen},
});

const RootStack = createBottomTabNavigator({
  Home: {screen: HomeStack},
  Profile:{screen: ProfileStack}
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home${focused ? '' : 'home'}`;
      } else if (routeName === 'Profile') {
        iconName = `user${focused ? '' : 'user-alt'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#0c9e9e',
    inactiveTintColor: '#979797',
  },
}
);

export default class App extends React.Component {

  render() {
    return (
  
        <RootStack/>
    );
  }
}

