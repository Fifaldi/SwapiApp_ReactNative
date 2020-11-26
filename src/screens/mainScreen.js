import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import swapi from '../api/swapi';
const mainScreen = () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const getApi = async () => {

      try{
          const response = await swapi.get('people',{
              params:{
              }
          });
        setResults(response.data.results);
    } catch(e){
        setErrorMsg('Something went wrong')
    }
    }
    useEffect(() => {getApi()}, [])

    return (
        <ImageBackground source={{uri: "https://img.pngio.com/star-wars-background-png-1-png-image-star-wars-background-png-1920_1080.png"}} style={styles.background}>
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: 'https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png'}}/>
                {errorMsg ? <Text style={{color: 'white'}}> {errorMsg} </Text> : null}
                <Text style={{color: 'white'}}>{results.length} results</Text>
            </View>
        </ImageBackground>  
    )
}

export default mainScreen

const styles = StyleSheet.create({
    background: {
        height: '100%',
        resizeMode: "cover"
      },
    logo: {
        width: 190, 
        height: 80,
        marginTop: 35,
        alignSelf: "center"
    }
})
