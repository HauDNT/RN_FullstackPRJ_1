import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/layouts/Layout";

const Checkout = ({navigation}) => {
    const handleCOD = () => {
        alert("Your oder has been placed successfully!");
    };
    
    const handleOnline = () => {
        alert("Your redireting to payment gateway");
        navigation.navigate("payment");
    };

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.heading}>Payment Options</Text>
                <Text style={styles.price}>Total Amount: 101$</Text>
                <View style={styles.paymentCard}>
                    <Text style={styles.paymentHeading}>Select your payment mode: </Text>
                    <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
                        <Text style={styles.paymentText}> Cash On Devlivery </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
                        <Text style={styles.paymentText}> Online (CREDIT | DEBIT CARD) </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "90%",
    },
    heading: {
        fontSize: 30,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontSize: 20,
        marginBottom: 10,
        color: "gray",
    },
    paymentCard: {
        backgroundColor: "#FFF",
        width: "90%",
        borderRadius: 10,
        padding: 30,
        marginVertical: 10,
    },
    paymentHeading: {
        color: "gray",
        marginBottom: 10,
        fontSize: 16,
    },
    paymentBtn: {
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#000",
    },
    paymentText: {
        textAlign: "center",
        fontSize: 16,
        color: "#FFF",
    }
});

export default Checkout;