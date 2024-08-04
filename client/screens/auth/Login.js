import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import InputBox from "../../components/form/InputBox";
import axios from "axios";

const Login = ({navigation}) => {
    const loginImage = "https://www.certifiedfinancialguardian.com/images/blog-wp-login.png";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Login function:
    const handleLogin = async () => {
        if (!email || !password) {
            return alert("Please add email or password!");
        }
    
        try {
            const response = await axios.post(
                `http://192.168.118.67:8082/api/user/login`,
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );
    
            alert(response.data.message); // Hiển thị thông điệp từ phản hồi
            navigation.navigate("home"); // Điều hướng sau khi đăng nhập thành công
        } catch (error) {
            console.error('Login error:', error); // Log lỗi để kiểm tra
            alert(error.response?.data?.message || 'An error occurred'); // Hiển thị thông báo lỗi
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