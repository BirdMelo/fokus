import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton"
import { colors } from "../components/Colors"
import { ActionButton } from "../components/ActionButton"
import { Timer } from "../components/Timer"

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
            <ActionButton 
              key={p.id} 
              active={timerType.id === p.id} 
              onPress={()=> setTimerType(p)} 
              display={p.display}
            />
          ))}
        </View>
          <Timer time={timerType.initialValue}/>
          <FokusButton/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={styles.footerText}> Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}
function minute(number) {
  return number*60;
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
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: colors.tasks,
    fontSize: 12.5
  }
})