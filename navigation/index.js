import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import onboardingScreens from './Onboarding';
import homeScreans from './Home';

const Navigation = createSwitchNavigator({onboardingScreens, homeScreans}, {initialRouteName: "onboardingScreens", lazy: true });

export default createAppContainer(Navigation)