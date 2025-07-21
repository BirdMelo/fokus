import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import {styles} from "../components/Styles"
import {colors} from "../components/Colors"
import {FokusButton} from "../components/FokusButton"
import Footer from "../components/aluraFooter"

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={indexStyle.iconFokus}
        source={require('../assets/images/projectImg/fokusIcon.png')}
      />
      <View>
        <Text style={styles.title}>Otimize sua produtividade,</Text>
        <Text style={[styles.title, styles.bold]}>mergulhe no que importa</Text>
      </View>
      <Image
        style={indexStyle.image}
        source={require('../assets/images/projectImg/Imagem tela inicial.png')}
      />
      <FokusButton title={"Quero iniciar!"} onPress={() => router.navigate('/pomodoro')}/>
      <Footer/>
    </View>
  )
}
const indexStyle = StyleSheet.create({
  iconFokus: {
    width: 156.36,
    height: 40
  },
  text_bold: {
    fontWeight: 'bold'
  },
  image: {
    width:317.67,
    height: 266.46
  }
})