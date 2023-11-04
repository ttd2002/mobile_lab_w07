import { View, Text, StyleSheet, Pressable, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo';

const screen_4 = () => {
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#00bdd6', width: '90%', height: '15%', borderRadius: 20, marginBottom: 10 }}>
                <View style={{ marginLeft: 10, justifyContent: 'space-between', height: '75%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>CAFE DELIVERY</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Order #18</Text>
                </View>
                <Text style={{ marginRight: 10, fontSize: 25, fontWeight: 'bold', color: '#fff' }}>#5</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#8353e2', width: '90%', height: '15%', borderRadius: 20 }}>
                <View style={{ marginLeft: 10, justifyContent: 'space-between', height: '75%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>CAFE</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>Order #18</Text>
                </View>
                <Text style={{ marginRight: 10, fontSize: 25, fontWeight: 'bold', color: '#fff' }}>#25</Text>
            </View>
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
            <Pressable style={{ marginTop: 100, borderRadius: 10, padding: 10, width: '90%', backgroundColor: '#efb034', justifyContent: 'center', alignItems: 'center' }} onPress={()=>{alert('paid successful')}}>
                <Text style={{ color: '#fff' }}>PAY NOW</Text>
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

})
export default screen_4