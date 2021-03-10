import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

//components
import Block from './KaraView';
import CustomText from './KaraText';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import PhoneBook from './SvgComponents/logo';


import { COLORS, SIZES } from '../constants/theme';


const CustomInput = (props) => {
    
  const {
    label,
    placeholder,
    iconName,
    secureTextEntry,
    onIconClick,
    value,
    onChangeText,
    onFocus,
    style,
    iconType: IconType = Icon,
    labelInfo,
    onLabelInfoClick,
    multiline,
    textcolor,
    inputRef,
    textArea,
    width,
    type
  } = props;

  const [focus, setFocus] = useState(false)

  return (
    <Block flex={false} style={{  marginBottom: 5 }}>
      {label ? (
        <Block flex={false} row>
          <CustomText
            size={17}
            lightbold
            style={{ ...styles.label, color: focus && COLORS.primary || COLORS.black }}
            left
            margin={[8, 0]}>
            {label}
          </CustomText>
          
        </Block>
      ) : null}

      {iconName === 'eye' ? (
        <Block
          flex={false}
          row
          style={{
            width: '100%',
            borderRadius: SIZES.radius,
            ...style,
            ...styles.phoneNext,
            borderColor: focus && COLORS.primary || '#EDEDED'
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              keyboardType='numeric'
              placeholderTextColor={COLORS.black}
              style={{ ...style, width: '70%', }}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              onChangeText={(text) => onChangeText(text)}
              value={numbro(value)}
              autoCorrect={false}
              selectTextOnFocus={true}
              autoCompleteType='off'
              multiline={false}
              onFocus={() => setFocus(!focus)}
              ref={inputRef}
              
              {...props}
            />
            <View
              style={{
                border: 'none',
                backgroundColor: COLORS.primary,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: SIZES.radius,
                borderBottomRightRadius: SIZES.radius
              }}>
              <PhoneBook />
            </View>
          </View>
        </Block>
      ) : (
        <TextInput
          textContentType={textArea && 'fullStreetAddress' || type}
          style={{
            ...styles.phoneNext,
            ...style,
            ...textcolor,
            height: textArea && 100,
            width: width ? width : '100%',
             borderColor: focus && COLORS.primary || '#EDEDED'
          }}
          placeholder={placeholder}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        //   selectTextOnFocus={true}
          autoCompleteType='off'
          autoCorrect={false}
          autoCapitalize='none'
          placeholderTextColor={COLORS.midGrey}
          multiline={multiline}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(false)}
          
          ref={inputRef}
          {...props}
        />
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  phoneNext: {
    minHeight: 50,
    borderRadius: SIZES.radius,
    width: '100%',
    backgroundColor: COLORS.white,
    paddingLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
    color: COLORS.midGrey,
    fontWeight: '800',
    fontFamily: 'avenir-regular',
    borderWidth: 0.7,
    borderColor: '#EDEDED'
  },
  Number: {
    minHeight: 50,
    borderRadius: SIZES.radius,
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'center',
    color: COLORS.black,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'avenir-semibold',
    // borderWidth: 0.3,
    borderColor: COLORS.lightGrey
  },
  label: {
    
    color: COLORS.black,
  },
  image: {
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default CustomInput;
