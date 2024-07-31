import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Layout from "../../components/layouts/Layout";

const Dashboard = () => {
    return (
        <Layout>
            <View style={styles.main}>
                <Text style={styles.heading}>Dashboard</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name="edit" style={styles.icon}/>
                        <Text style={styles.btnText}>Manage products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name="setting" style={styles.icon}/>
                        <Text style={styles.btnText}>Manage categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name="user" style={styles.icon}/>
                        <Text style={styles.btnText}>Manage users</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name="bars" style={styles.icon}/>
                        <Text style={styles.btnText}>Manage orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name="info" style={styles.icon}/>
                        <Text style={styles.btnText}>About app</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#EEE",
        height: "96%",
    },
    heading: {
        backgroundColor: "#000",
        color: "#FFF",
        textAlign: "center",
        padding: 10,
        fontSize: 20,
        margin: 10,
        borderRadius: 5,
        fontWeight: "bold",
    },
    btnContainer: {
        margin: 10,
    },
    btn: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10,
        elevation: 10,
        marginBottom: 20,
    },
    icon: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    btnText: {
        fontSize: 16,
    }
});

export default Dashboard;