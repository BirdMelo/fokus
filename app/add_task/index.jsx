import { Text, View, TextInput, StyleSheet, Pressable, SafeAreaView } from "react-native"
import { styles } from "../../components/Styles"
import Footer from "../../components/aluraFooter"
import { colors } from "../../components/Colors"
import { IconSave } from "../../components/Icons"
export default function AddTask() {
    return (
        <SafeAreaView style={[styles.container, addTask.mainContainer]}>
            <Text style={styles.title}>
                Adicionar uma tarefa:
            </Text>
            <View style={addTask.inputContainer}>
                <Text style= {addTask.taskTitle}>
                    Em qual atividade está trabalhando?
                </Text>
                <TextInput 
                    style={addTask.textInput}
                    numberOfLines={10}
                    multiline={true}
                />
                <View style={addTask.buttonsContainer}>
                    <Pressable style={addTask.salveButton}>
                        <IconSave/>
                        <Text style={addTask.buttonText}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
            <Footer/>
        </SafeAreaView>
    )
}

const addTask = StyleSheet.create({
    mainContainer: {
        justifyContent: 'flex-start'
    },
    inputContainer: {
        backgroundColor: colors.tasks,
        paddingHorizontal: 16,
        paddingVertical: 17,
        gap: 32,
        borderRadius: 8
    },
    textInput: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 16,
        width: 280,
        height:120,
        alignSelf: 'center',
        textAlignVertical: 'top'
    },
    salveButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    taskTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonText: {
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 24
    }
})