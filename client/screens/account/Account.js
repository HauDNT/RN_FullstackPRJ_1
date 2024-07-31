import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Layout from "../../components/layouts/Layout";
import { UserData } from "../../data/UserData";

const Account = ({ navigation }) => {
    return (
        <Layout>
            <View style={styles.container}>
                <Image source={{uri: UserData.avatar}} style={styles.image}/>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.name}> 
                        Hi 
                        <Text style={{color: "blue"}}> 
                            {UserData.name}
                        </Text>
                    </Text>
                    <Text>Email: {UserData.email}</Text>
                    <Text>Email: {UserData.contact}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <Text style={styles.heading}>Account settings</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("profile", {id: UserData._id})}>
                        <AntDesign name="edit" style={styles.btnText}/>
                        <Text style={styles.btnText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("myorders", {id: UserData._id})}>
                        <AntDesign name="bars" style={styles.btnText}/>
                        <Text style={styles.btnText}>My Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("notification")}>
                        <AntDesign name="bells" style={styles.btnText}/>
                        <Text style={styles.btnText}>Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <AntDesign name="windows" style={styles.btnText}/>
                        <Text style={styles.btnText}>Admin Panel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    image: {
        height: 100,
        width: "100%",
        resizeMode: "center",
    },
    name: {
        marginTop: 10,
        fontSize: 20,
    },
    btnContainer: {
        padding: 10,
        backgroundColor: "#FFF",
        margin: 10,
        marginVertical: 20,
        elevation: 5,
        borderRadius: 10,
        paddingBottom: 30,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: "lightgray",
    },
    btn: {
        flexDirection: "row",
        marginVertical: 10,
        padding: 10,
    },
    btnText: {
        fontSize: 15,
        marginRight: 10,
    }
});

export default Account;