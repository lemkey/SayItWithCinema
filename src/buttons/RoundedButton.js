import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButton = ({ 
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
    <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = (size) =>
 StyleSheet.create({
  radius: { 
  paddingTop: 5,
  borderRadius: size / 3,
  width: 100,
  height: 36,
  alignItems: 'center', 
  borderColor: '#ecf0f1',
  borderWidth: 2
  },
  text: {color: 'gray', fontSize: size / 3 },
})