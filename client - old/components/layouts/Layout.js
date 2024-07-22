import { View, Text, StatusBar, StyleSheet } from "react-native";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <StatusBar/>
            <View>{children}</View>
            <View style={styles.footer}>
                <Footer/>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    footer: {
        display: "flex",
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        zIndex: 100,
        borderTopWidth: 1,
        borderColor: "lightgray",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        padding: 10,
    }
});

export default Layout;