import { Text, View, TextInput, StyleSheet, Pressable, SafeAreaView } from "react-native"
import { styles } from "../../components/Styles"
import Footer from "../../components/aluraFooter"
import { colors } from "../../components/Colors"
import { IconSave } from "../../components/Icons"
import useTaskContext from "../../components/context/useTaskContext"
import { useState } from "react"
import { router } from "expo-router"
export default function AddTask() {
    const [description, setDescription] = useState()
    const {addTask} = useTaskContext()
    const submitTask = () => {
        if(!description) {
            return
        }
        addTask(description)
        setDescription('')
        router.navigate('/tasks')
    }

    return (
        <SafeAreaView style={[styles.container, addTask__style.mainContainer]}>
            <Text style={styles.title}>
                Adicionar uma tarefa:
            </Text>
            <View style={addTask__style.inputContainer}>
                <Text style= {addTask__style.taskTitle}>
                    Em qual atividade está trabalhando?
                </Text>
                <TextInput 
                    style={addTask__style.textInput}
                    numberOfLines={10}
                    multiline={true}
                    value={description}
                    onChangeText={setDescription}
                />
                <View style={addTask__style.buttonsContainer}>
                    <Pressable style={addTask__style.salveButton} onPress={submitTask}>
                        <IconSave/>
                        <Text style={addTask__style.buttonText}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
            <Footer/>
        </SafeAreaView>
    )
}

const addTask__style = StyleSheet.create({
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