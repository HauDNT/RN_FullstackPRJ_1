import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { UserData } from "../../data/UserData";
import InputBox from "../../components/form/InputBox";

const Profile = ({navigation}) => {
    // States:
    const [email, setEmail] = useState(UserData.email);
    const [profilePic, setProfilePic] = useState(UserData.avatar);
    const [password, setPassword] = useState(UserData.password);
    const [name, setName] = useState(UserData.name);
    const [address, setAddress] = useState(UserData.address);
    const [city, setCity] = useState(UserData.city);
    const [contact, setContact] = useState(UserData.contact);

    // Update profile function:
    const handleUpdateProfile = () => {
        if (!email || !password || !name || !address || !city || !contact) {
            return alert("Please provide all fields!");
        }
        else {
            alert("Profile updated success!");
            navigation.navigate("account");
        }
    };

    return (
        <Layout>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: profilePic }} style={styles.image}/>
                        <Pressable onPress={() => alert("Profile dialog")}>
                            <Text style={{color: "blue"}}>Update your profile picture</Text>
                        </Pressable>
                    </View>
                    <InputBox value={name} setValue={setName} placeholder={"Enter your name"} />
                    <InputBox value={email} setValue={setEmail} placeholder={"Enter your email"} />
                    <InputBox value={password} setValue={setPassword} placeholder={"Enter your password"} autoComplete={"password"} secureTextEntry={true}/>
                    <InputBox value={address} setValue={setAddress} placeholder={"Enter your address"} />
                    <InputBox value={city} setValue={setCity} placeholder={"Enter your city"} />
                    <InputBox value={contact} setValue={setContact} placeholder={"Enter your contact number"} />

                    <TouchableOpacity style={styles.btnContainer} onPress={handleUpdateProfile}>
                        <Text style={styles.btnText}>Update</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 100,
        width: "100%",
        resizeMode: "center"
    },
    btnContainer: {
        backgroundColor: "#000",
        height: 40,
        borderRadius: 20,
        marginHorizontal: 30,
        justifyContent: "center",
        marginTop: 10,
    },
    btnText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default Profile;