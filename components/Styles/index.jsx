import { StyleSheet } from 'react-native'
import {colors} from '../Colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bgColor,
    gap: 40
  },
  actions: {
    padding: 24,
    backgroundColor: colors.stopwatch_bg,
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: colors.chips,
    gap: 32
  },
  timer_context:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: colors.tasks,
    fontSize: 12.5
  }
})