import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from '../Colors';
import { IconCheck, IconPencil, IconTrash } from "../Icons";

export const TaskItem =({ completed, text, onToggleComplete, onPressEdit, onPressRemove }) => {
    const cardStyles__list = [tasksStyles.container]
    if(completed){
        cardStyles__list.push(tasksStyles.cardCompleted)
    }
    return (
        <View style={cardStyles__list}>
            <View style={ tasksStyles.viewBlock}>
                <Pressable style={ tasksStyles.taskButton} onPress={onToggleComplete}>
                    <IconCheck checked = { completed }/>
                </Pressable>
                <Text style={tasksStyles.text}>{text}</Text>
            </View>
            <View style={ tasksStyles.viewBlock}>
                <Pressable style={ tasksStyles.taskButton} onPress={onPressEdit}>
                    <IconPencil/>
                </Pressable>
                    
                <Pressable style={ tasksStyles.taskButton} onPress={onPressRemove}>
                    <IconTrash/>
                </Pressable>
            </View>
        </View>
    )
}
const tasksStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.tasks,
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 20,
        borderRadius: 8,
        width: '100%'
    },
    viewBlock: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    text: {
        color: colors.bgColor,
        fontWeight: 'bold'
    },
    cardCompleted: {
        backgroundColor: colors.completed
    },
    taskButton: {
        // borderColor: 'red',
        // borderWidth: 1,
        padding: 7
    }
})