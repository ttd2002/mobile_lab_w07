import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo';


const Screen_3 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://653f4af99e8bd3be29e02de4.mockapi.io/drinks")
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
                    <View style={styles.containerItems}>
                        <View style={styles.left_container}>
                            <Image style={styles.ima_st} source={{ uri: item.img }} />
                            <View style={styles.info_cont}>
                                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                <Text>{item.cost}</Text>

                            </View>
                        </View>
                        <View style={styles.right_container}>
                            <Pressable>
                                <Icon name="circle-with-minus" size={30} color="green" />
                            </Pressable>
                            <Pressable>
                                <Icon name="circle-with-plus" size={30} color="green" />
                            </Pressable>
                        </View>

                    </View>
                }
            />
            <Pressable style={styles.btn}>
                <Text style={styles.btn_text}>GO TO CART</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerItems: {
        flexDirection: 'row',
        height: 40,
        width: 350,
        borderWidth: 1,
        borderColor: 'grey',
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    left_container: {
        flexDirection: 'row',
        gap: 10,

    },
    right_container: {
        flexDirection: 'row',
        gap: 20,
    },
    ima_st: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    info_cont: {
        justifyContent: 'space-between'
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
    circle: {
        backgroundColor: 'green',
        height: 30,
        width: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_cir: {
        fontWeight: 'bold',
        color: 'white'
    }
})
export default Screen_3