import { Text, SafeAreaView } from "react-native";
import {styles} from "../../components/Styles"
export default function Tasks () {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Página para listar tarefas
            </Text>
        </SafeAreaView>
    )
}