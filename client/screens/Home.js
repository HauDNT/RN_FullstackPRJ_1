import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/layouts/Header";
import Layout from "../components/layouts/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/banner/Banner";
import Products from "../components/products/Products";

const Home = () => {
    return (
        <ScrollView>
            <Layout>
                <Header/>
                <Categories/>
                <Banner/>
                <Products/>
            </Layout>
        </ScrollView>
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