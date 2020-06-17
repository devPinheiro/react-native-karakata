import React from 'react';
import {
  Animated,
  I18nManager,
  Text,
  StyleSheet
} from 'react-native';
import {
  useSelector
} from 'react-redux';
import i18n from 'i18n-js';

import {
  theme
} from '../constants';

const {
  COLORS,
  SIZES,
  FONTS
} = theme;

const MnassaText = props => {
  const localization = useSelector(s => s.locale);
  // i18n.fallbacks = true;
  // i18n.locale = localization.locale;
  const handleMargins = () => {
    const {
      margin
    } = props;
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin
      };
    }
    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
              marginRight: margin[0],
              marginBottom: margin[0],
              marginLeft: margin[0]
          };
        case 2:
          return {
            marginTop: margin[0],
              marginRight: margin[1],
              marginBottom: margin[0],
              marginLeft: margin[1]
          };
        case 3:
          return {
            marginTop: margin[0],
              marginRight: margin[1],
              marginBottom: margin[2],
              marginLeft: margin[1]
          };
        default:
          return {
            marginTop: margin[0],
              marginRight: margin[1],
              marginBottom: margin[2],
              marginLeft: margin[3]
          };
      }
    }
  };

  const handlePaddings = () => {
    const {
      padding
    } = props;
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
              paddingRight: padding[0],
              paddingBottom: padding[0],
              paddingLeft: padding[0]
          };
        case 2:
          return {
            paddingTop: padding[0],
              paddingRight: padding[1],
              paddingBottom: padding[0],
              paddingLeft: padding[1]
          };
        case 3:
          return {
            paddingTop: padding[0],
              paddingRight: padding[1],
              paddingBottom: padding[2],
              paddingLeft: padding[1]
          };
        default:
          return {
            paddingTop: padding[0],
              paddingRight: padding[1],
              paddingBottom: padding[2],
              paddingLeft: padding[3]
          };
      }
    }
  };

  const {
    //typography
    localeKey,
    xsmall,
    smallish,
    small,
    medium,
    large,
    xlarge,
    xxlarge,
    xxxlarge,
    size,
    //font-weight
    regular,
    bold,
    semibold,
    heavy,
    medium300,
    lightbold,
    light200,
    //styling
    transform,
    align,
    weight,
    center,
    right,
    left,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    accent,
    primary,
    deepprimary,
    secondary,
    tertiary,
    black,
    white,
    midGrey,
    success,
    error,
    style,
    animated,
    children,
    margin,
    padding,
    lightGrey,
    darkerGrey,
    lighterGrey,
    descText,
    greyText,
    ...rest
  } = props;

  const textStyles = [
    styles.text,
    styles.rtl,
    xsmall && styles.xsmall,
    smallish && styles.smallish,
    small && styles.small,
    medium && styles.medium,
    large && styles.large,
    xlarge && styles.xlarge,
    xxlarge && styles.xxlarge,
    xxxlarge && styles.xxxlarge,
    size && {
      fontSize: size
    },
    transform && {
      textTransform: transform
    },
    align && {
      textAlign: align
    },
    height ? {
      lineHeight: height
    } : {
      lineHeight: 30
    },
    spacing && {
      letterSpacing: spacing
    },
    weight && {
      fontWeight: weight
    },
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    heavy && styles.heavy,
    medium300 && styles.medium300,
    lightbold && styles.lightbold,
    light200 && styles.light200,
    center && styles.center,
    right && styles.right,
    left && styles.left,
    color && styles[color],
    color && !styles[color] && {
      color
    },
    margin && {
      ...handleMargins()
    },
    padding && {
      ...handlePaddings()
    },
    // color shortcuts
    accent && styles.accent,
    primary && styles.primary,
    deepprimary && styles.deepprimary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    success && styles.success,
    error && styles.error,
    midGrey && styles.midGrey,
    lightGrey && styles.lightGrey,
    darkerGrey && styles.darkerGrey,
    lighterGrey && styles.lighterGrey,
    descText && styles.descText,
    greyText && styles.greyText,
    i18n.locale == 'ar' ?
    {
      writingDirection: 'rtl'
    } :
    {},
    //style && style.lineHeight ? { lineHeight: style.lineHeight } : { lineHeight: 30 },
    // (style && style.fontSize < 14 && regular) ||
    // (style && style.fontSize < 14 && medium300) ||
    // (size < 14 && medium300) ||
    // (size < 14 && regular) ||
    // (small && medium300) ||
    // (small && regular)
    //   ? { fontFamily: 'avenir-medium' }
    //   : null,
    style // rewrite predefined styles
  ];

  const checkRtl = localization.locale == 'ar' ? styles.rtl : styles.ltr;
  if (localeKey && animated) {
    return ( <
      Animated.Text style = {
        textStyles
      } {
        ...rest
      } > {
        i18n.t(localeKey)
      } <
      /Animated.Text>
    );
  }

  if (animated) {
    return ( <
      Animated.Text style = {
        textStyles
      } {
        ...rest
      } > {
        children
      } <
      /Animated.Text>
    );
  }
  if (localeKey) {
    return ( <
      Text style = {
        textStyles
      } {
        ...rest
      }
      allowFontScaling = {
        false
      } > {
        i18n.t(localeKey)
      } <
      /Text>
    );
  }
  return ( <
    Text style = {
      textStyles
    } {
      ...rest
    }
    allowFontScaling = {
      false
    } > {
      children
    } <
    /Text>
  );
};

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: SIZES.medium,
    color: COLORS.darkGray
  },
  // variations
  regular: {
    fontFamily: 'avenir-regular'
  },
  bold: {
    fontFamily: 'avenir-semibold'
  },
  semibold: {
    fontFamily: 'avenir-semibold'
  },
  heavy: {
    fontFamily: 'avenir-semibold'
  },
  medium300: {
    fontFamily: 'avenir-regular'
    // ...(Platform.OS === 'android' && { fontWeight: '500' })
  },
  lightbold: {
    fontFamily: 'avenir-medium'
  },
  light200: {
    fontFamily: 'avenir-regular'
  },
  // position
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  left: {
    textAlign: 'left'
  },
  // colors
  accent: {
    color: COLORS.accent
  },
  primary: {
    color: COLORS.primary
  },
  deepprimary: {
    color: COLORS.deepprimary
  },
  secondary: {
    color: COLORS.secondary
  },
  tertiary: {
    color: COLORS.tertiary
  },
  black: {
    color: COLORS.black
  },
  white: {
    color: COLORS.white
  },
  success: {
    color: COLORS.success
  },
  error: {
    color: COLORS.error
  },
  midGrey: {
    color: COLORS.midGrey
  },
  lightGrey: {
    color: COLORS.lightGrey
  },
  darkerGrey: {
    color: COLORS.darkerGrey
  },
  lighterGrey: {
    color: COLORS.lighterGrey
  },
  descText: {
    color: COLORS.descText
  },
  greyText: {
    color: COLORS.greyText
  },
  // fonts size
  xsmall: FONTS.xsmall,
  smallish: FONTS.smallish,
  small: FONTS.small,
  medium: FONTS.medium,
  large: FONTS.large,
  xlarge: FONTS.xlarge,
  xxlarge: FONTS.xxlarge,
  xxxlarge: FONTS.xxxlarge
});

export default MnassaText;
