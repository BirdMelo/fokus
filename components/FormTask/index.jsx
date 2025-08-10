import { Text, View, TextInput, Pressable, SafeAreaView } from "react-native"
import { addAlterTask__style, styles } from "../../components/Styles"
import Footer from "../../components/aluraFooter"
import { IconSave } from "../../components/Icons"
import { useState } from "react"
export default function FormTask({ onFormSubmit, defaultValue = '' }) {
    const [description, setDescription] = useState(defaultValue)

    const submitTask = () => {
        if(!description) {
            return
        }
        onFormSubmit(description)
        setDescription('')
    }

    return (
        <SafeAreaView style={[styles.container, addAlterTask__style.mainContainer]}>
            <Text style={styles.title}>
                {defaultValue? 'Editar': 'Adicionar'} uma tarefa:
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