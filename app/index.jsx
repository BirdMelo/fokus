import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import {styles} from "../components/Styles"
import {colors} from "../components/Colors"
import {FokusButton} from "../components/FokusButton"

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={indexStyle.iconFokus}
        source={require('../assets/images/projectImg/fokusIcon.png')}
      />
      <View>
        <Text style={indexStyle.text}>Otimize sua produtividade,</Text>
        <Text style={[indexStyle.text, indexStyle.text_bold]}>mergulhe no que importa</Text>
      </View>
      <Image
        style={indexStyle.image}
        source={require('../assets/images/projectImg/Imagem tela inicial.png')}
      />
      {/* <FokusButton title={"Quero iniciar!"} onPress={() => console.log("navegar")}/> */}
      <Link style={indexStyle.button} href={{pathname: '/pomodoro'}}>
        <Text style={indexStyle.button__text}>Quero iniciar!</Text>
      </Link>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={styles.footerText}> Desenvolvido por Alura.</Text>
      </View>
    </View>
  )
}
const indexStyle = StyleSheet.create({
  iconFokus: {
    width: 156.36,
    height: 40
  },
  text: {
    color: colors.text,
    fontSize: 37,
    textAlign: 'center'
  },
  text_bold: {
    fontWeight: 'bold'
  },
  image: {
    width:317.67,
    height: 266.46
  },
  button: {
    backgroundColor: colors.buttons_bg,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13.5,
    paddingHorizontal: 69.5,
    paddingVertical: 6.5
  },
  button__text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.bgColor

  }
})