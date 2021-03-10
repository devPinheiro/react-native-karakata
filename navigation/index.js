import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import onboardingScreens from './Onboarding';
import homeScreens from './Home';

const Navigation = createSwitchNavigator({onboardingScreens, homeScreens}, {initialRouteName: "onboardingScreens", lazy: true });

export default createAppContainer(Navigation)