import { Pressable, StyleSheet, Text, View } from "react-native";
import {IconCheck, IconPencil, IconTrash} from "../../components/Icons"
import {colors} from '../../components/Colors'

export const TaskItem =({ completed, text, onToggleComplete, onPressEdit, onPressRemove }) => {
    const cardStyles__list = [cardStyles.container]
    if(completed){
        cardStyles__list.push(cardStyles.cardCompleted)
    }
    return (
        <View style={cardStyles__list}>
            <View style={ cardStyles.viewBlock}>
                <Pressable onPress={onToggleComplete}>
                    <IconCheck checked = { completed }/>
                </Pressable>
            
                <Text style={cardStyles.text}> {text} </Text>
            </View>
            <View style={ cardStyles.viewBlock}>
                <Pressable onPress={onPressEdit}>
                    <IconPencil/>
                </Pressable>
                    
                <Pressable onPress={onPressRemove}>
                    <IconTrash/>
                </Pressable>
            </View>
            
                
            
        </View>
    )
}
const cardStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.tasks,
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 20,
        borderRadius: 8
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
    }
})