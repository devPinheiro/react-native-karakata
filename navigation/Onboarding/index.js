import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import OnboardingScreens from '../../screens/OnboardingScreens';
import LoginScreen from '../../screens/OnboardingScreens/Login';
import RegisterScreen from '../../screens/OnboardingScreens/Register';
import HomeScreen from '../../screens/Home/HomeScreen';

const onBoardingScreens = createStackNavigator({
  OnboardingScreens,
  LoginScreen,
  RegisterScreen,
  HomeScreen
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

export default onBoardingScreens;