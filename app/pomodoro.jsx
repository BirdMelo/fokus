import { useState, useRef } from "react";
import { Image, View } from "react-native";
import { FokusButton } from "../components/FokusButton"
import { ActionButton } from "../components/ActionButton"
import { Timer } from "../components/Timer"
import {styles} from "../components/Styles"
import {IconPlay, IconPause} from '../components/Icons'
import Footer from "../components/aluraFooter"

export default function Pomodoro() {
  
  const [timerType, setTimerType] = useState(pomodoro[0])
  const [timerRunning, setTimerRunning] = useState(false)
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)

  const timerRef = useRef(null)

  function clear() {
    if(timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }
  function toggleTimerType(newTimerType) {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }
  function toggleTimer() {
    if(timerRef.current) {
      clear()
      return
    }
    setTimerRunning(true)
    const id = setInterval(() => {
      setSeconds(currentTime => {
        if(currentTime === 0) {
          clear()
          return timerType.initialValue
        }
        return currentTime -1
      })
    }, 1000)
    timerRef.current = id
  }
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
              onPress={()=> {toggleTimerType(p)}}
              display={p.display}
            />
          ))}
        </View>
          <Timer time={seconds}/>
          <FokusButton title={timerRunning ? 'Pausar' : 'Começar'} icon={timerRunning ? <IconPause/> : <IconPlay/>} onPress={toggleTimer}/>
      </View>
      <Footer/>
    </View>
  );
}
function minute(number) {
  return number * 60
}
const pomodoro = [
  {
    id:'focus',
    initialValue: minute(25),
    image: require('../assets/images/projectImg/foco_img.png'),
    display: 'Foco'
  },
  {
    id:'short',
    initialValue: minute(5),
    image: require('../assets/images/projectImg/pausaCurta_img.png'),
    display: 'Pausa curta'
  },
  {
    id:'long',
    initialValue: minute(15),
    image: require('../assets/images/projectImg/pausaLonga_img.png'),
    display: 'Pausa longa'
  }
]