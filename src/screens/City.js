import React from "react";
import { Text, StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import IconText from "../components/IconText";

const City = () => {
    const { container, city, country, locationText, populationWrapper, populationText, rowLayout, riseSetWrapper, riseSetText} = styles;
    return (
        <SafeAreaView style = {container}>
            <ImageBackground 
                source = {require('../../assets/city-background.jpg')}
                style = {styles.imageLayout} 
            >
                <Text style = {[city, locationText]}>Gurugram</Text>
                <Text style = {[country, locationText]}>India</Text>
                <View style = {[populationWrapper, rowLayout]}>
                    <IconText iconName = {'users'} iconColor = {'red'} textString = {'10000'} textStyle = {populationText} />
                </View>
                <View style = {[riseSetWrapper, rowLayout]}>
                    <IconText iconName = {'sunrise'} iconColor = {'yellow'} textString = {'06.21:58 AM'} textStyle = {riseSetText} />
                    <IconText iconName = {'sunset'} iconColor = {'orange'} textString = {'19.23:46 AM'} textStyle = {riseSetText} />
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
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    }, 
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City;