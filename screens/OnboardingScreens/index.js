import {  Animated, Image, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { SIZES, COLORS } from "../../utils/theme"
import KaraText from "../components/KaraText"
import KaraView from "../components/KaraView"
import { LinearGradient as Gradient } from 'expo-linear-gradient';
import { Transition } from 'react-navigation-fluid-transitions';
import KaraButton from '../components/KaraButton';


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
              height: '35%',
              position: "relative",
              top: -40
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
    <KaraView flex={false} center bottom margin={[10, 40, 5, 40]}style={styles.renderText}>
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
  const [skip, setSkip] = useState(true);
  const scrollX = new Animated.Value(0);
  const renderActions = () => {
    return (
      <>
        {skip ?
        <TouchableOpacity onPress={() => setSkip(!skip)}>
          <KaraText right margin={[10, 30]} color={COLORS.lightGrey}>Skip</KaraText>
        </TouchableOpacity> :
        <View style={styles.spaceBetween}>
         <TouchableOpacity>
        <View style={styles.buttonFill}><KaraText white>Sign Up</KaraText></View></TouchableOpacity>
 
         <TouchableOpacity><View style={styles.buttonOutline}><KaraText primary>Login</KaraText></View></TouchableOpacity>
        </View>}
      </>
    )
  }
  useEffect(() => {
    scrollX.addListener(({ value }) => {
      setSlideIndex(Math.floor(value / SIZES.screenWidth));
    });
  }, [slideIndex]);
 
  return  (    
      <KaraView>
       
        <View>
          <Image  source={require("../../assets/images/mini-logo.png")}
                      resizeMode="contain"
                      style={{
                        width: SIZES.screenWidth, 
                        height: 50,
                        position: "absolute",
                        top: 30,

                      }}/>
         {renderTexts(slideIndex)}
      </View>
       {/* <View style={styles.curvePanel}></View> */}
    
      
      <KaraView center middle>
        {/* {renderImages(scrollX)} */}
      </KaraView>
      <KaraView flex={false} center bottom margin={[20, 40]}>
        {/* {renderDots(scrollX)} */}
       
      </KaraView>
      {renderActions(scrollX)}
    </KaraView>
  );
}

Onboarding.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  dot: {
    width: 9,
    height: 9,
    backgroundColor: "#1687F8"
  }, 
  svgBackground: {
    position: 'absolute',
    top: 0,
    backgroundColor: "#1687F8",
    height: SIZES.screenHeight * 0.45,
    width: SIZES.screenWidth,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 5
  },
  renderText: {
    position: 'relative',
    top: 160,
},
 spaceBetween: {
   flexDirection: "row",
   justifyContent: "center",
    marginBottom: 10
 },
  buttonFill: {
    marginRight: 10,
    paddingTop: 5,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 5,
    color: COLORS.white,
    borderRadius: 5,
    backgroundColor: COLORS.primary
  },
  buttonOutline: {
    marginLeft: 10,
    paddingTop: 5,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 5,
    color: COLORS.white,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 0.5
  }
});


export default Onboarding;