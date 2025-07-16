import { useState } from "react";
import {Image, StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  
    const [timerType, setTimerType] = useState(pomodoro[0])
  return (
    <View
      style={styles.container}
    >
      <Image source = {timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.timer_context}>
          {pomodoro.map(p => (
            <Pressable 
              key={p.id} 
              style={timerType.id === p.id ? styles.timer_context__text__Active : null}
              onPress={()=> setTimerType(p)}
            >
              <Text style={styles.timer_context__text}>
                {p.display}
              </Text>
            </Pressable>
          ))}
        </View>
          <Text style={styles.timer}>{ new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'}) }</Text>
          <Pressable style={styles.button}><Image source={require('../assets/images/projectImg/play_arrow.png')}/><Text style={styles.buttonText}>Começar</Text></Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={styles.footerText}> Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}
const pomodoro = [
  {
    id:'focus',
    initialValue: 25,
    image: require('../assets/images/projectImg/foco_img.png'),
    display: 'Foco'
  },
  {
    id:'short',
    initialValue: 5,
    image: require('../assets/images/projectImg/pausaCurta_img.png'),
    display: 'Pausa curta'
  },
  {
    id:'long',
    initialValue: 15,
    image: require('../assets/images/projectImg/pausaLonga_img.png'),
    display: 'Pausa longa'
  }
]
const colors = {
  bgColor: '#021123',
  stopwatch_bg: '#14448080',
  chips: '#144480',
  buttons_bg: '#B872FF',
  tasks: '#98A0A8',
  text: '#FFF'
}
const styles = StyleSheet.create({
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
  timer_context__text:{
    color: colors.text,
    padding: 8,
    fontSize: 12
  },
  timer_context__text__Active:{
    fontWeight: 'bold',
    backgroundColor: colors.chips,
    borderRadius: 8
  },
  timer: {
    color: colors.text,
    fontSize: 53.7,
    fontWeight: 'bold',
    textAlign: 'center'
  },
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