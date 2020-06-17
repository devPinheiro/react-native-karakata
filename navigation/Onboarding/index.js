import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import OnboardingScreens from '../../screens/OnboardingScreens';

const onBoardingScreans = createStackNavigator({
  OnboardingScreens
}, {
  defaultNavigationOptions: {
    headerStyle: {},
    headerBackImage: null,
    headerBackTitle: null,
    headerLeftContainerStyle: {},
    headerRightContainerStyle: {}
  }
});

export default onBoardingScreans;