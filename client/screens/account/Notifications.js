import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/layouts/Layout";

const Notifications = () => {
    return (
        <Layout>
            <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Text>Oops ! You don't have any notification yet...</Text>
            </View>
        </Layout>
    );
};

export default Notifications;