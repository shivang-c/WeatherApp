import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from "../utilities/weatherType"
import moment from 'moment';

const ListItem = ({ dt_txt, min, max, condition }) => {
    const { temp, date, item, dateTextWrapper} = styles;
    return (
        <View style = {item}>
            <Feather name = {weatherType[condition].icon} size = {35} color = {"white"} />
            <View style = {dateTextWrapper}>
                <Text style = {date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style = {date}>{moment(dt_txt).format('h:mm a')}</Text>
            </View>
            <Text style = {temp}>{`${Math.round(min)}°C/${Math.round(max)}°C`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    temp: {
        color: 'white',
        fontSize: 17.5
    },
    date: {
        color: 'white',
        fontSize: 17.5
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
    dateTextWrapper: {
        flexDirection: 'column'
    }
})
export default ListItem;