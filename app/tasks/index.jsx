import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {styles} from "../../components/Styles"
import { TaskItem } from "../TaskItem"
import {FokusButton} from "../../components/FokusButton"
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
export default function Tasks () {
    return (
        <SafeAreaView style={[styles.container, taksList.container]}>
            <Text style={styles.title}>
                Lista de Tarefas:
            </Text>
            <ScrollView
                contentContainerStyle={taksList.viewList}
                style={taksList.scrollArea}
            >
                <TaskItem completed text="Estudar React"/>
                <TaskItem text = "Estudar React-Native"/>
            </ScrollView>
            <FokusButton 
                title="Adicionar nova tarefa" 
                outline 
                icon={<IconPlus/>}
                onPress={()=> {router.navigate('/add_task')}}
            />
        </SafeAreaView>
    )
}
const taksList = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingBottom: '15%',
        paddingHorizontal: '5%'
    },
    viewList: {
        gap: 8
    },
    scrollArea: {
        marginVertical: 8
    }
})