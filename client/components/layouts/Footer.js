import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";

const Footer = () => {
    const route = useRoute();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("home")}>
                <AntDesign name="home" style={[styles.icon, route.name === "home" && styles.active]} />
                <Text style={[styles.iconText, route.name === "home" && styles.active]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("notification")}>
                <AntDesign name="bells" style={[styles.icon, route.name === "notification" && styles.active]} />
                <Text style={[styles.iconText, route.name === "notification" && styles.active]}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("account")}>
                <AntDesign name="user" style={[styles.icon, route.name === "account" && styles.active]} />
                <Text style={[styles.iconText, route.name === "account" && styles.active]}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("cart")}>
                <AntDesign name="shoppingcart" style={[styles.icon, route.name === "card" && styles.active]} />
                <Text style={[styles.iconText, route.name === "card" && styles.active]}>Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuContainer} onPress={() => {alert("Logout"), navigation.navigate("login")}}>
                <AntDesign name="logout" style={[styles.icon, route.name === "logout" && styles.active]} />
                <Text style={[styles.iconText, route.name === "logout" && styles.active]}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    menuContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        fontSize: 20,
        color: "#000",
    },
    iconText: {
        color: "#000",
        fontSize: 15,
    },
    active: {
        color: "blue",
    },
});

export default Footer;