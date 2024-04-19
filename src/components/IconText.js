import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = ({ iconName, iconColor, textString, textStyle }) => {
    return (
        <>
            <Feather name = {iconName} size = {50} color = {iconColor}/>
            <Text style = {[styles.textTheme, textStyle]}>{textString}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    }
})

export default IconText