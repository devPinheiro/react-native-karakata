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
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const _loadResourcesAsync = () => {
    return Font.loadAsync({
      'avenir-bold': require('./assets/fonts/avenir-bold.ttf'),
      'avenir-heavy': require('./assets/fonts/avenir-heavy.ttf'),
      'avenir-semibold': require('./assets/fonts/avenir-semibold.ttf'),
      'avenir-medium': require('./assets/fonts/avenir-medium.ttf'),
      'avenir-regular': require('./assets/fonts/avenir-regular.ttf'),
      'avenir-light': require('./assets/fonts/avenir-light.ttf'),
      'lucida-grande': require('./assets/fonts/LucidaGrande.ttf'),
      'lucida-grande-bold': require('./assets/fonts/LucidaGrandeBold.ttf'),
      // Roboto: require('native-base/Fonts/Roboto.ttf'),
      // Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
  };

  const _handleLoadingError = error => {
    console.warn(error);
  };

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return ( <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={() => setIsLoadingComplete(true)}
      />
    );
  }

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