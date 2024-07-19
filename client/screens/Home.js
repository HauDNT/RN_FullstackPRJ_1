import { Text, View, StyleSheet } from "react-native";
import Layout from "../components/layouts/Layout";

const Home = () => {
    return (
        <Layout>
            <View>
                <Text>Home Page</Text>
            </View>
        </Layout>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});