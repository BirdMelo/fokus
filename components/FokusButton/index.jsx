import { Pressable, StyleSheet, Animated, Dimensions } from 'react-native'
import {colors} from '../Colors'
import React, {useRef} from 'react';

export const FokusButton = ( { onPress, title, icon, outline }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current

  React.useEffect(() => {
    fadeAnim.setValue(0); // Inicia transparente
    Animated.timing(fadeAnim, {
      toValue: 1, // Volta a ficar visível
      duration: 300, // Duração da animação (em ms)
    }).start();
  }, [title]);
  let hasIcon
  if(icon) {
    hasIcon = (
      <Animated.View style={{opacity: fadeAnim}}> {icon} </Animated.View>
    )
  }
  return (
      <Pressable 
        style={[styles.button, outline && styles.outlineButton]} 
        onPress={onPress}
      >
        {hasIcon}
        <Animated.Text 
        style={[styles.buttonText, outline && styles.outlineButtonText, {opacity: fadeAnim}]}
        >
          {title}
        </Animated.Text>
      </Pressable>
  )
}
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttons_bg,
    paddingHorizontal: width * 0.20,
    paddingVertical: 8,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13.5
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: colors.buttons_bg,
    borderWidth: 2
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.bgColor,
    fontSize: 18
  },
  outlineButtonText:{
    color: colors.buttons_bg
  }
})