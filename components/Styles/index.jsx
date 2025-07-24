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
  },
  title: {
    color: colors.text,
    fontSize: 37,
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold'
  },
  text: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center'
  }
})
export const addAlterTask__style = StyleSheet.create({
  mainContainer: {
        justifyContent: 'flex-start'
    },
    inputContainer: {
        backgroundColor: colors.tasks,
        paddingHorizontal: 16,
        paddingVertical: 17,
        gap: 32,
        borderRadius: 8
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 5,
        borderColor: 'white',
        width: 280,
        height:120,
        alignSelf: 'center',
        textAlignVertical: 'top'
    },
    salveButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    taskTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonText: {
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 24
    }
})