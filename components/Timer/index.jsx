import { Text, StyleSheet } from 'react-native'
import {colors} from '../Colors'
export const Timer = ({time}) => {
    const date = new Date(time * 1000)
    const formation = {minute: '2-digit', second: '2-digit'}

    return (
        <Text style={styles.timer}>{ date.toLocaleTimeString('pt-BR', formation) }</Text>
    )
}
const styles = StyleSheet.create({
  timer: {
    color: colors.text,
    fontSize: 53.7,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})