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
    card: {
        borderWidth: 1,
        borderColor: "lightgray",
        marginVertical: 5,
        marginHorizontal: 8,
        width: "45%",
        padding: 10,
        backgroundColor: "#FFF",
        justifyContent: "center",
    },
    cardImage: {
        height: 185,
        width: "100%",
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 5,
    },
    cardDesc: {
        fontSize: 12,
        textAlign: "left",
    },
    btnContainer: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#000",
        height: 20,
        width: 65,
        borderRadius: 5,
        justifyContent: "center",
    },
    btnText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 10,
        fontWeight: "bold",
    }
});

export default ProductsData;