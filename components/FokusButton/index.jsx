import { Pressable, StyleSheet, Animated } from 'react-native'
import {colors} from '../Colors'
import React, {useRef} from 'react';
import {IconPlay, IconPause} from '../Icons'

export const FokusButton = ( { onPress, title }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current

  React.useEffect(() => {
    fadeAnim.setValue(0); // Inicia transparente
    Animated.timing(fadeAnim, {
      toValue: 1, // Volta a ficar visível
      duration: 300, // Duração da animação (em ms)
    }).start();
  }, [title]);

  const image = title === 'Começar'? <IconPlay/> : <IconPause/>
  return (
      <Pressable style={styles.button} onPress={onPress}>
        <Animated.View style={{opacity: fadeAnim}}>
          {image}
        </Animated.View>
        <Animated.Text style={[styles.buttonText, {opacity: fadeAnim}]}>{title}</Animated.Text>
      </Pressable>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttons_bg,
    padding: 8,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13.5
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.bgColor,
    fontSize: 18
  }
})