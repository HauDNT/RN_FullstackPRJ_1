import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/form/InputBox";

const Login = ({navigation}) => {
    const loginImage = "https://www.certifiedfinancialguardian.com/images/blog-wp-login.png";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Login function:
    const handleLogin = () => {
        if (!email || !password) {
            return alert("Please add email or password!");
        }
        else {
            alert("Login success!");
            navigation.navigate("home");
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{uri: loginImage}} style={styles.image} />
            <InputBox 
                placeholder={"Enter your email"} 
                autoComplete={"email"}
                value={email}
                setValue={setEmail}
            />
            <InputBox 
                placeholder={"Enter your password"}
                autoComplete={"password"}
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <TextInput />
            <View style={styles.btncontainer}>
                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
                <Text>
                    Not a user yet? Please {""}
                    <Text onPress={() => navigation.navigate("register")} style={styles.link}>
                        register here
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height: "100%",
    },
    image: {
        height: 200,
        width: "100%",
        resizeMode: "contain",
    },
    btncontainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    loginBtn: {
        backgroundColor: "#000",
        width: "80%",
        justifyContent: "center",
        height: 40,
        borderRadius: 10,
        marginBottom: 20,
    },
    loginBtnText: {
        color: "#FFF",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "500",
        fontSize: 18,
    },
    link: {
        color: "blue",
    }
});

export default Login;