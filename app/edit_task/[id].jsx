import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import useTaskContext from "../../components/context/useTaskContext";
import FormTask from "../../components/FormTask";

export default function EditTask () {
    const {id} = useLocalSearchParams()
    const {tasks, updateTask} = useTaskContext()
    const task = tasks.find(t => t.id = id)
    
    const submitTask = (description) => {
        updateTask(id, description)
        router.navigate('/tasks')
    }

    if(!task) {
        return (
            <View>
                Não foi encontrada uma tarefa com id: {id}
            </View>
        )
    }

    return(
        <FormTask onFormSubmit={submitTask} defaultValue={task.description}/>
    )
}