import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = ({ iconName, iconColor, textString }) => {
    return (
        <View>
            <Feather name = {iconName} size = {50} color = {iconColor}/>
            <Text style = {styles.populationText}>10000</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default IconText