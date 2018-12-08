// @flow

import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScene from './scenes/Home/HomeScene';
import StockScene from './scenes/Stock/StockScene';
import LoginScene from './scenes/Login/LoginScene';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScene,
      App: createBottomTabNavigator(
        {
          Home: HomeScene,
          Setokk: StockScene,
        },
        {
          initialRouteName: 'Home',
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
        },
      ),
    },
    {
      initialRouteName: 'App',
    },
  ),
);
