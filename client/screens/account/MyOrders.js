import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Layout from "../../components/layouts/Layout";
import { ordersData } from "../../data/OrdersData";
import OrderItem from "../../components/form/OrderItem";

const MyOrders = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.heading}>My Orders</Text>
                <View>
                    <ScrollView>
                        {
                            ordersData.map(order => (
                                <OrderItem key={order._id} order={order} />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    heading: {
        textAlign: "center",
        color: "gray",
        fontWeight: "bold",
        fontSize: 20,
    }
});

export default MyOrders;