import {Image, StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source = {require('./projectImg/foco_img.png')}/>
      <View style={styles.actions}>
          <Text style={styles.timer}>25:00</Text>
          <Pressable style={styles.button}><Image source={require('./projectImg/play_arrow.png')}/><Text style={styles.buttonText}>Começar</Text></Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={styles.footerText}> Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  timer: {
    color: '#FFF',
    fontSize: 53.7,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#B872FFE0',
    padding: 8,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13.5
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#021123',
    fontSize: 18
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#90A0A8',
    fontSize: 12.5
  }
})