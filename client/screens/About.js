import { Text, View, StyleSheet } from "react-native";

const About = () => {
    return (
        <View style={styles.container}>
            <Text> About Page </Text>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});