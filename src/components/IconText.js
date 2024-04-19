import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = ({ iconName, iconColor , textString, textStyle }) => {
    const { container, textTheme } = styles;
    return (
        <View style = {container}>
            <Feather name = {iconName} size = {50} color = {iconColor}/>
            <Text style = {[textTheme, textStyle]}>{textString}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textTheme: {
        fontWeight: 'bold'
    }
})

export default IconText