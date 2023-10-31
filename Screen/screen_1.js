import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const screen_1 = () => {
    const navi1 = useNavigation();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/shops")
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

    }, []);

    return (
        <View style={styles.container}>
            <Text style = {styles.logo}>Welcome to Cafe world</Text>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={styles.containerItems}>
                        <Image style={styles.Image_style} source={{ uri: item.image }} />

                    </View>
                }
            />
            <Pressable style={styles.btn} onPress={()=>{navi1.navigate('Shops near me')}}>
                <Text style={styles.btn_text}>GET STARTED</Text>
            </Pressable>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 40,
    },
    containerItems: {
        width: 200,
        height: 150,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 20,
    },
    
    Image_style: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    btn: {
        padding: 10,
        width: '90%',
        backgroundColor: '#efb034',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    btn_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    
});
export default screen_1