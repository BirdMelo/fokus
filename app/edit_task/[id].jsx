import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import Footer from "../../components/aluraFooter";
import { IconSave } from "../../components/Icons";
import { useState } from "react";
import { styles, addAlterTask__style } from "../../components/Styles";
import useTaskContext from "../../components/context/useTaskContext";

export default function EditTask () {
    const [description, setDescription] = useState()
    const {id} = useLocalSearchParams()
    const {alterTask} = useTaskContext()
    const submitTask = () => {
        if(!description) {
            return
        }
        alterTask(id, description)
        setDescription('')
        router.navigate('/tasks')
    }

    return(
        <View style={[styles.container, addAlterTask__style.mainContainer]}>
            <Text style={styles.title}>
                Altere a tarefa:
            </Text>
            <View style={addAlterTask__style.inputContainer}>
                <TextInput
                    style={addAlterTask__style.textInput}
                    numberOfLines={10}
                    multiline={true}
                    value={description}
                    onChangeText={setDescription}
                    placeholder={`Digite aqui para alterar ${id}° tarefa da sua lista`}
                />

                <View style={addAlterTask__style.buttonsContainer}>
                    <Pressable style={addAlterTask__style.salveButton} onPress={submitTask}>
                        <IconSave/>
                        <Text style={addAlterTask__style.buttonText}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
            <Footer/>
        </View>
    )
}