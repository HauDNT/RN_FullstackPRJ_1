import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrderItem = ({ order }) => {
    return (
        <View style={styles.container}>
            <View style={styles.orderInfor_1}>
                <Text>Order ID: {order._id}</Text>
                <Text>Date: {order.date}</Text>
            </View>
            <View style={styles.orderInfor_2}>
                <Text>Product name: {order.productInfor.name}</Text>
                <Text>Price: {order.productInfor.price}</Text>
                <Text>Quantity: {order.productInfor.quantity}</Text>
                <Text>Total Amount: {order.totalAmount} $</Text>
            </View>
            <View>
                <Text style={styles.status}>Order Status: {order.status}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        margin: 20,
        padding: 10,
        borderRadius: 10,
    },
    orderInfor_1: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        paddingBottom: 5,
    },
    orderInfor_2: {
        paddingVertical: 5,
    },
    status: {
        borderTopWidth: 1,
        fontWeight: "bold",
        borderColor: "lightgray",
        padding: 5,
        paddingLeft: 0,
    }
});

export default OrderItem;