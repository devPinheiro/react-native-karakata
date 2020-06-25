import {  Animated, Image, StyleSheet, ScrollView, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { SIZES } from "../../utils/theme"
import KaraText from "../components/KaraText"
import KaraView from "../components/KaraView"
import { LinearGradient as Gradient } from 'expo-linear-gradient';
import { Transition } from 'react-navigation-fluid-transitions';


const slides = [
  {
    title: 'Welcome to Karakata',
    description: 'Build and expand your network with people you trust',
    img: "https://res.cloudinary.com/appnet/image/upload/v1592601647/karakata/piggy.png"
  },
  {
    title: 'Move your parcel anywhere',
    description: 'Find and attend activities within your interest',
    img: "https://res.cloudinary.com/appnet/image/upload/v1592601646/karakata/logistic.png"
  },
  {
    title: 'Earn Points',
    description: 'Gain points for supporting other members',
    img: "https://res.cloudinary.com/appnet/image/upload/v1592601646/karakata/shopping.png"
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
        <>  
        <KaraView center bottom key={`img-${index}`} style={{ width: SIZES.screenWidth }}>

          <Image
            source={{ uri: item.img}}
            resizeMode="contain"
            style={{
              width: SIZES.screenWidth,
              height: '80%',
              // position: "absolute",
              // top: -10
            }}
          />
          
        </KaraView>
       </>
      ))}
    </ScrollView>
  );
};

const renderTexts = slideIndex => {
  const slide = slides[slideIndex];

  return (
    <KaraView flex={false} center bottom margin={[10, 40, 5, 40]}>
      <KaraText animated center color="white" large semibold localeKey={`welcomeText${slideIndex + 1}`}>
        {slide && slide.title}
      </KaraText>
      <KaraText
        lightbold
        animated 
        color="white"
        center
        
        margin={[0]}
        localeKey={`welcomeDescription${slideIndex + 1}`}
      >
        {slide && slide.description}
      </KaraText>
    </KaraView>
  );
};

const renderDots = scrollX => {
  const dotPosition = Animated.divide(scrollX, SIZES.screenWidth);
  return (
    <KaraView row center middle margin={[SIZES.medium, 0]}>
      {slides.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });

        // const color = opacity.__getValue() === 1 ? COLORS.primary : '#C8D5D8';
        return (
          <KaraView
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
    </KaraView>
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
    <KaraView safe>
   

   <KaraView>
     
    <Svg
      width={SIZES.screenWidth}
      height={392}
      viewBox="0 0 414 392"
      fill="none"
    
    >
      <Path d="M0 0h414v297c-44.5 156.5-273 91.5-414 0V0z" fill="#258EF6" />      
    </Svg>
        
      
    </KaraView>
      <KaraView>{renderTexts(slideIndex)}</KaraView>
      <KaraView center middle>
        {renderImages(scrollX)}
      </KaraView>
      {/* <SwitchButton dispatch={dispatch} screenProps={screenProps} navigation={navigation} /> */}
      <KaraView flex={false} center bottom margin={[20, 40]}>
        {renderDots(scrollX)}
      </KaraView>
    </KaraView>
  );
}

Onboarding.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  dot: {
    width: 9,
    height: 9
  },
  // svgBackground: {
  //   position: 'absolute',
  //   top: -18,
  // },
});


export default Onboarding;