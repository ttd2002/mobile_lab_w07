
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';


export default function Screen_2() {
    const [data, setData] = useState([])
    const navi2 = useNavigation();
    useEffect(() => {
        fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/shops")
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <Pressable onPress={()=>{
                        item.status? navi2.navigate('Drinks') : alert('not available');
                    }}>
                        <View style={styles.containerItems}>
                            <Image style={styles.Image_style} source={{ uri: item.image }} />
                            <View style={styles.status_Container}>
                                {item.status
                                    ? <View style={styles.text_Container}>
                                        <Icon name="checkmark" size={20} color="green" />
                                        <Text style={styles.True}>Accepting Orders</Text>
                                    </View>
                                    : <View style={styles.text_Container}>
                                        <Icon name="lock-closed" size={20} color="red" />
                                        <Text style={styles.False}>Tempory Unavailable</Text>
                                    </View>}
                                <View style={styles.text_Container}>
                                    <Icon name="time-outline" size={20} color="green" />
                                    <Text style={styles.text_time}>{item.distanceTime}</Text>
                                </View>
                                <IconFon name="map-marker-alt" size={20} color="green" />
                            </View>
                            <Text style={styles.text_Name}>{item.name}</Text>
                            <Text>{item.address}</Text>

                        </View>
                    </Pressable>

                }
            />
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
    containerItems: {
        width: 350,
        height: 240,
        marginVertical: 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10
    },
    text_Name: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    Image_style: {
        width: '100%',
        height: '70%',
        resizeMode: 'contain'
    },
    status_Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    True: {
        fontStyle: 10,
        color: 'green',
        fontWeight: 'bold'
    },
    False: {
        fontStyle: 10,
        color: 'red',
        fontWeight: 'bold'

    },
    text_Container: {
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        padding: 5,
        marginVertical: 4,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text_time: {
        fontWeight: 'bold',
        color: 'red'
    }
});