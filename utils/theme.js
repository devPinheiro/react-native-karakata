import React from 'react'
import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export const COLORS = {
  //base color
  lightprimary: '#8bd5e2',
  primary: '#66cde0',
  secondary: '#007C93',
  accent: '#BC5C00',
  tertiary: '#FF7C00',
  success: '#219653',
  error: '#fe3b30',
  background: '#F2F5F7',
  placeholder: '#cfd8dc',
  offprimary: '#21b9d7',

  //neutral
  black: '#000000',
  white: '#ffffff',

  //color variations
  darkGray: '#222435',
  midGrey: '#515151',
  lightGrey: '#999999',
};

export const SIZES = {
  // font sizes
  base: 8,
  xsmall: 12,
  smallish: 13,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 24,
  xxxlarge: 26,

  //radius
  buttonRadius: 50,
  cardRadius: 5,
  radius: 4,

  //dimensions
  screenWidth,
  screenHeight,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54
};

export const FONTS = {
  xsmall: {
    fontSize: SIZES.xsmall,
    letterSpacing: 0.15
  },
  smallish: {
    fontSize: SIZES.smallish,
    letterSpacing: 0
  },
  small: {
    fontSize: SIZES.smallish,
    letterSpacing: 0
  },
  medium: {
    fontSize: SIZES.medium,
    letterSpacing: 0
  },
  large: {
    fontSize: SIZES.large,
    letterSpacing: 0
  },
  xlarge: {
    fontSize: SIZES.xlarge,
    letterSpacing: 0
  },
  xxlarge: {
    fontSize: SIZES.xxlarge,
    letterSpacing: 0
  },
  xxxlarge: {
    fontSize: SIZES.xxxlarge,
    letterSpacing: 0
  }
};

export default {
  COLORS,
  SIZES,
  FONTS
};

