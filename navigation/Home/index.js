import React from 'react';
import {
  createStackNavigator
} from 'react-navigation-stack';

import BottomNavigator from '../BottomTabNavigator';

const homeScreens = createStackNavigator({
  BottomNavigator
}, {
  defaultNavigationOptions: {
    headerStyle: {},
    headerBackImage: null,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {}
  }
});

export default homeScreens;