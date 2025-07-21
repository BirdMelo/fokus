import { router } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Footer from "../../components/aluraFooter";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { styles } from "../../components/Styles";
import { TaskItem } from "../../components/TaskItem";
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
            <Footer/>
        </SafeAreaView>
    )
}
const taksList = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '15%',
        paddingHorizontal: '5%'
    },
    viewList: {
        gap: 8
    },
    scrollArea: {
        width: '100%'
    }
})