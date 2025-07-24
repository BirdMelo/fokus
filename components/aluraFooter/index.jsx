import { Text, View } from "react-native";
import { styles } from "../Styles";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
            <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
        </View>
    )
}