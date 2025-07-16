import { Pressable, Text, StyleSheet } from "react-native"
import {colors} from "../Colors"
export const ActionButton = ({active, onPress, display}) => {
    return (
        <Pressable 
            style={active ? styles.timer_context__text__Active : null}
            onPress={onPress}
        >
            <Text style={styles.timer_context__text}>
            {display}
            </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
  timer_context__text:{
    color: colors.text,
    padding: 8,
    fontSize: 12
  },
  timer_context__text__Active:{
    fontWeight: 'bold',
    backgroundColor: colors.chips,
    borderRadius: 8
  }
})