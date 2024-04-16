import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = ({ dt_txt, min, max, condition }) => {
    const { temp, date, item} = styles;
    return (
        <View style = {item}>
            <Feather name = {"sun"} size = {35} color = {"white"} />
            <Text style = {date}>{dt_txt}</Text>
            <Text style = {temp}>{min}</Text>
            <Text style = {temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    temp: {
        color: 'white',
        fontSize: 15
    },
    date: {
        color: 'white',
        fontSize: 12.5
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
})
export default ListItem;