import { StyleSheet, FlatList, ImageBackground, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';


const UpcomingWeather = ({ weatherData }) => {
  
    const renderItem = ({ item }) => 
    <ListItem 
        condition = {item.weather[0].main} 
        dt_txt = {item.dt_txt} 
        min = {item.main.temp_min} 
        max = {item.main.temp_max} 
    />

    const { container, image, heading } = styles;
    
    return (
        <SafeAreaView style = {container}>
            <ImageBackground 
                source = {require('../../assets/upcoming-background.jpg')} 
                style = {image}
            >
                <FlatList 
                    data = {weatherData} 
                    renderItem = {renderItem} 
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue',
    },
    image: {
        flex: 1
    },
    heading: {
      alignSelf: 'center',
      fontSize: 30,
      marginTop: 5
    }
})

export default UpcomingWeather