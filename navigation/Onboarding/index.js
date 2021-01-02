import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import OnboardingScreens from '../../screens/OnboardingScreens';
import LoginScreen from '../../screens/OnboardingScreens/Login';

const onBoardingScreans = createStackNavigator({
  OnboardingScreens,
  LoginScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      
    },
    headerBackImage: null,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {}
  }
});

export default onBoardingScreans;