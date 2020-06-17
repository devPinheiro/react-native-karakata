import {  Animated, Image, StyleSheet, ScrollView, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Svg, {Path} from "react-native-svg";
import { SIZES } from "../../utils/theme"


const slides = [
  {
    title: 'Welcome to Mnassa',
    description: 'Build and expand your network with people you trust',
    img: <Svg width={48} height={1} viewBox="0 0 48 1">
      <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </Svg>
  },
  {
    title: 'Connect to your community',
    description: 'Find and attend activities within your interest',
    img: <Svg width={48} height={1} viewBox="0 0 48 1">
      <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </Svg>
  },
  {
    title: 'Earn Points',
    description: 'Gain points for supporting other members',
    img: <Svg width={48} height={1} viewBox="0 0 48 1">
      <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </Svg>
  }
];

const renderImages = scrollX => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={0}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
    >
      {slides.map((item, index) => (
        <View center bottom key={`img-${index}`} style={{ width: SIZES.screenWidth }}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: SIZES.screenWidth,
              height: '80%'
            }}
          />
          {renderTexts(index)}
        </View>
      ))}
    </ScrollView>
  );
};

const renderTexts = slideIndex => {
  const slide = slides[slideIndex];

  return (
    <View flex={false} center bottom margin={[10, 40, 5, 40]}>
      <MnassaText animated center large semibold localeKey={`welcomeText${slideIndex + 1}`}>
        {slide && slide.title}
      </MnassaText>
      <MnassaText
        lightbold
        animated
        center
        midGrey
        margin={[0]}
        localeKey={`welcomeDescription${slideIndex + 1}`}
      >
        {slide && slide.description}
      </MnassaText>
    </View>
  );
};

const renderDots = scrollX => {
  const dotPosition = Animated.divide(scrollX, SIZES.screenWidth);
  return (
    <View row center middle margin={[SIZES.medium, 0]}>
      {slides.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });

        // const color = opacity.__getValue() === 1 ? COLORS.primary : '#C8D5D8';
        return (
          <View
            primary
            animated
            flex={false}
            key={`dot-${index}`}
            radius={SIZES.small}
            margin={[0, SIZES.small / 2]}
            style={[styles.dot, { opacity }]}
          />
        );
      })}
    </View>
  );
};

const Onboarding = ({ navigation, screenProps }) => {
 
  const [slideIndex, setSlideIndex] = useState(0);
  const scrollX = new Animated.Value(0);
 
  useEffect(() => {
    scrollX.addListener(({ value }) => {
      setSlideIndex(Math.floor(value / SIZES.screenWidth));
    });
  }, [slideIndex]);
 
  return  (
    <View safe>
      <View center middle>
        {renderImages(scrollX)}
      </View>
      {/* <SwitchButton dispatch={dispatch} screenProps={screenProps} navigation={navigation} /> */}
      <View flex={false} center bottom margin={[20, 40]}>
        {renderDots(scrollX)}
      </View>
    </View>
  );
}
Onboarding.navigationOptions = {
  header: null
};

export default Onboarding;