import { View, Text } from "react-native";
import ProductsCard from "./ProductsCard";
import {ProductsData} from "../../data/ProductsData";

const Products = () => {
    return (
        <View>
            {
                ProductsData.map(product => (
                    <ProductsCard key={product._id} product={product} />
                ))
            }
        </View>
    )
}

export default Products;