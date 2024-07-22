import React, {useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const CartItem = ({item}) => {
    const [qty, setQty] = useState(1);

    // Handle function for + -
    const handleAddQty = () => {
        if (qty === 10) return alert("you cant add more than 10 quantity");
        setQty((prev) => prev + 1);
    };

    const handleRemoveQty = () => {
        if (qty <= 1) return;
        setQty((prev) => prev - 1);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <View>
                <Text style={styles.name}>{item?.name}</Text>
                <Text style={styles.name}>Price: {item?.price} $</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                    <Text style={styles.btnQtyText}>+</Text>
                </TouchableOpacity>
                <Text>{qty}</Text>
                <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
                    <Text style={styles.btnQtyText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",

    },
    image: {
        height: 75,
        width: 55,
        resizeMode: "contain",
    },
    name: {
        fontSize: 13,
        width: 200,
        paddingLeft: 5,
    },
    btnContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        width: 50,
    },
    btnQty: {
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 100,
        width: 23,
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 3,
    },
    btnQtyText: {
        fontSize: 16,
    },
});

export default CartItem;