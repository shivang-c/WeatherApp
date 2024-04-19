import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'

const Error = ({error}) => {
    return(
        <SafeAreaProvider>
            <SafeAreaView style = {styles.mainContainer}>
                <Text style = {styles.headingText}>Error in fetching data!</Text>
                <SafeAreaView style = {styles.codeContainer}>
                    <Feather name = {'alert-octagon'} size = {50} color = {'black'} />
                    <Text style = {styles.errorCode}>Error code {error.code}</Text>
                </SafeAreaView>
                <Text style = {styles.errorText}>{error.message}</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headingText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    codeContainer: {
        justifyContent: 'start',
        alignItems: 'center'
    },
    errorCode: {
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    errorText: {
        fontWeight: 'bold',
        textAlign: 'justify'
    }
})
export default Error;

