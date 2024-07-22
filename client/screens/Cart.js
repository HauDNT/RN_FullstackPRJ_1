import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import {CartsData} from "../data/CartsData";
import PriceTable from "../components/cart/PriceTable";
import Layout from "../components/layouts/Layout";
import CartItem from "../components/cart/CartItem";

const Cart = ({navigation}) => {
    const [cartItems, setCartItem] = useState(CartsData);

    return (
        <Layout>
            <Text style={styles.heading}> 
            {
                cartItems?.length > 0 ? 
                `You have ${cartItems.length} item left in your cart` 
                : 
                "OOPS, your cart is empty!"
            }
            </Text>
            {
                cartItems && (
                    <>
                        <ScrollView>
                            {cartItems?.map(item => (
                                <CartItem item={item} key={item._id} />
                            ))}
                        </ScrollView>
                        <View>
                            <PriceTable title={"Total"} price={999} />
                            <PriceTable title={"Total"} price={999} />
                            <PriceTable title={"Total"} price={999} />
                            <View style={styles.grandTotal}>
                                <PriceTable 
                                    title={"Grand total"} 
                                    price={1001}
                                />
                            </View>
                            <TouchableOpacity 
                                style={styles.checkOut} 
                                onPress={() => navigation.navigate("checkout")}
                            >
                                <Text style={styles.checkOutText}>Check out</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
            }
        </Layout>
    );
};

const styles = StyleSheet.create({
    heading: {
        textAlign: "center",
        color: "green",
    },
    grandTotal: {
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        backgroundColor: "#FFF",
        padding: 5,
        margin: 5,
        marginHorizontal: 20,
    },
    checkOut: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        backgroundColor: "#3FA2F6",
        width: "90%",
        marginHorizontal: 20,
        borderRadius: 20,
    },
    checkOutText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
    },
})

export default Cart;