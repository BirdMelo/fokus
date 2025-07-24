import { Text, View, TextInput, Pressable, SafeAreaView } from "react-native"
import { addAlterTask__style, styles } from "../../components/Styles"
import Footer from "../../components/aluraFooter"
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
        <SafeAreaView style={[styles.container, addAlterTask__style.mainContainer]}>
            <Text style={styles.title}>
                Adicionar uma tarefa:
            </Text>
            <View style={addAlterTask__style.inputContainer}>
                <Text style= {addAlterTask__style.taskTitle}>
                    Em qual atividade está trabalhando?
                </Text>
                <TextInput 
                    style={addAlterTask__style.textInput}
                    numberOfLines={10}
                    multiline={true}
                    value={description}
                    onChangeText={setDescription}
                />
                <View style={addAlterTask__style.buttonsContainer}>
                    <Pressable style={addAlterTask__style.salveButton} onPress={submitTask}>
                        <IconSave/>
                        <Text style={addAlterTask__style.buttonText}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
            <Footer/>
        </SafeAreaView>
    )
}