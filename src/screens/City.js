import React from "react";
import { Text, StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
    const { container, cityStyles, countryStyles, locationText, populationWrapper, populationText, rowLayout, riseSetWrapper, riseSetText} = styles;
    const { name, country, population, sunrise, sunset} = weatherData;

    return (
        <SafeAreaView style = {container}>
            <ImageBackground 
                source = {require('../../assets/city-background.jpg')}
                style = {styles.imageLayout} 
            >
                <Text style = {[cityStyles, locationText]}>{name}</Text>
                <Text style = {[countryStyles, locationText]}>{country}</Text>
                <View style = {[populationWrapper, rowLayout]}>
                    <IconText iconName = {'users'} iconColor = {'red'} textString = {`Population: ${population}`} textStyle = {populationText} />
                </View>
                <View style = {[riseSetWrapper, rowLayout]}>
                    <IconText iconName = {'sunrise'} iconColor = {'yellow'} textString = {moment(sunrise).format('h:mm:ss a')} textStyle = {riseSetText} />
                    <IconText iconName = {'sunset'} iconColor = {'orange'} textString = {moment(sunset).format('h:mm:ss a')} textStyle = {riseSetText} />
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
    cityStyles: {
        fontSize: 40,
    },
    countryStyles: {
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