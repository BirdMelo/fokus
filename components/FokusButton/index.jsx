import { Pressable, Text, StyleSheet, Image } from 'react-native'
import {colors} from '../Colors'

export const FokusButton = () => {
    return (
        <Pressable style={styles.button}><Image source={require('../../assets/images/projectImg/play_arrow.png')}/><Text style={styles.buttonText}>Começar</Text></Pressable>
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