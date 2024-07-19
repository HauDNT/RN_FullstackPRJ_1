import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductsData = ({product}) => {
    const navigation = useNavigation();

    const handleMoreDetailBtn = (id) => {
        navigation.navigate("productDetails", {_id: id});
        console.log(id);
    };

    const handleAddToCard = () => {
        alert("Add product to card!");
    };

    return (
        <View>
            <View style={styles.card}>
                <Image style={styles.cardImage} source={{ uri: product?.imageUrl }}/>
                <Text style={styles.cardTitle}>{product?.name}</Text>
                <Text style={styles.cardDesc}>{product?.description.substring(0, 30)}... More</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => handleMoreDetailBtn(product._id)}>
                        <Text style={styles.btnText}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={handleAddToCard}>
                        <Text style={styles.btnText}>Add to card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    card: {
        width: '50%',
        margin: 5,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardImage: {
        width: "100%",
        height: 210,
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 10,
    },
    cardDesc: {
        fontSize: 14,
        color: "#666",
    },
    btnContainer: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
    },
    btn: {
        padding: 10,
        backgroundColor: "#007BFF",
        borderRadius: 5,
    },
    btnText: {
        color: "#fff",
        fontSize: 14,
    },
});

export default ProductsData;