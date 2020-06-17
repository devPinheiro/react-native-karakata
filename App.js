// import {
//   NavigationContainer
// } from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import PropTypes from 'prop-types';
import * as Font from 'expo-font';
import {
  AppLoading
} from 'expo';
import Entry from './Entry';

// import { Provider } from 'react-redux';

// import useCachedResources from './hooks/useCachedResources';
// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import OnboardingScreen from './screens/OnboardingScreens';
// import LinkingConfiguration from './navigation/LinkingConfiguration';


const KaraKata = props => {
  // const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  // if (!isLoadingComplete && !props.skipLoadingScreen) {
  //   return ( <AppLoading onFinish = {
  //       () => setIsLoadingComplete(true)
  //     }
  //     />
  //   );
  // }

  return (
    // <Provider store={myStore}>
    // <Root>
    <Entry />
    // </Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

KaraKata.defaultProps = {
  skipLoadingScreen: false
};

KaraKata.propTypes = {
  skipLoadingScreen: PropTypes.bool.isRequired
};

export default KaraKata;