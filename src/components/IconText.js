import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = ({ iconName, iconColor, textString }) => {
    return (
        <>
            <Feather name = {iconName} size = {50} color = {iconColor}/>
            <Text style = {styles.populationText}>{textString}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    }
})

export default IconText