import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, ImageBackground, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import IconText from "../components/IconText";

const City = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground 
                source = {require('../../assets/city-background.jpg')}
                style = {styles.imageLayout} 
            >
                <Text style = {[styles.city, styles.locationText]}>Gurugram</Text>
                <Text style = {[styles.country, styles.locationText]}>India</Text>
                <View style = {styles.populationWrapper}>
                    <IconText iconName = {'users'} iconColor = {'red'} textString = {'10000'} textStyle = {styles.populationText}/>
                </View>
                <View style = {styles.riseSetWrapper}>
                    <IconText iconName = {'sunrise'} iconColor = {'yellow'} textString = {'06.21'} textStyle = {styles.riseSetText}/>
                    <IconText iconName = {'sunset'} iconColor = {'orange'} textString = {'19.23'} textStyle = {styles.riseSetText}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageLayout: {
        flex: 1
    },
    city: {
        fontSize: 40,
    },
    country: {
        fontSize: 40,
    },
    locationText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red'
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    }
})

export default City;