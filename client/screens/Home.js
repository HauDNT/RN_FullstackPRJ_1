import { Text, View, StyleSheet } from "react-native";
import Layout from "../components/layouts/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/banner/Banner";

const Home = () => {
    return (
        <Layout>
            <Categories/>
            <Banner/>
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