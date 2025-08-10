import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext()
const TASKS_STORAGE_KEY = 'fokus-tasks'
export function TasksProvider ({children}) {
    const [tasks, setTask] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=> {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
                const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTask(loadedData)
                setIsLoaded(true)
            } catch (e) {
                console.error('Erro ao carregar', e)
            }
        };
        getData()
    }, [])

    useEffect(() => {
        
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
            } catch (e) {
                console.error('Erro ao salvar', e)
            }
        };
        if(isLoaded) {
            storeData(tasks)
        }
    }, [tasks])

    const addTask = (description) => {
        setTask(oldState => {
            return [
                ...oldState,
                {
                    description,
                    id: oldState.length + 1
                }
            ]
        })
    }
    const toggleTaskCompleted = (id) => {
        setTask(oldState => {
            return oldState.map(t => {
                if(t.id === id) {
                    t.completed = !t.completed
                }
                return t
            })
        })
    }
    const updateTask = (id, description) => {
        setTask(oldState => {
            return oldState.map(t => {
                if(t.id === id) {
                    t.description = description
                }
                return t
            })
        })
    }
    const deleteTask = (id) => {
        setTask(oldState => {
            return oldState.filter(t => t.id !== id)
        })
    }
    const alterTask = (id, description) => {
        setTask(oldState => {
            return oldState.map(t => {
                if(t.id === Number(id)) {
                    return {...t, description}
                }
                return t
            })
        })
    }
    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                toggleTaskCompleted,
                deleteTask,
                alterTask,
                updateTask
            }}
        >
            { children }
        </TaskContext.Provider>
    )
}