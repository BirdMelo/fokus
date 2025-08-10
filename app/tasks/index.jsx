import { router } from "expo-router";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../../components/aluraFooter";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { styles } from "../../components/Styles";
import { TaskItem } from "../../components/TaskItem";
import useTaskContext from "../../components/context/useTaskContext";
import { colors } from "../../components/Colors";

export default function Tasks () {

    const { tasks, deleteTask, toggleTaskCompleted  } = useTaskContext()

    return (
        <SafeAreaView style={[styles.container, taksList.container]}>
            <Text style={styles.title}>
                Lista de Tarefas:
            </Text>
            <FlatList
                data={tasks}
                renderItem={({item}) =>
                    <TaskItem 
                        completed={item.completed} 
                        text={item.description}
                        onPressRemove={() => deleteTask(item.id)}
                        onToggleComplete={() => toggleTaskCompleted(item.id)}
                        onPressEdit={() => router.navigate(`/edit_task/${item.id}`)}
                    />
                }
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{height:8}} ></View>}
                ListEmptyComponent={
                    <Text style={taksList.notEmptyScroll}>Ainda não há tarefas na sua lista, que tal adicionar?</Text>
                }
            />
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
    notEmptyScroll: {
        fontSize: 22,
        color: colors.tasks,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})