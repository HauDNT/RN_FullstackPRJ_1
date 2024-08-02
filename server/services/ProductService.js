import ProductModel from "../models/ProductModel.js";

class ProductService {
    validationFields (fields, data, optionalFields = []) {
        for (let field of fields) {
            if (!data[field] && !optionalFields.includes(field)) {
                return {
                    success: false,
                    message: `Please provide field ${field}`,
                };
            }
        }

        return { success: true };
    };

    async getAllProduct() {
        const products = await ProductModel.find({});
        return products;
    }

    async getAProduct(id) {
        try {
            const product = await ProductModel.findById(id);
            return product;
        } catch (error) {
            if (error.name === "CaseError") {
                console.log("Invalid ID");
            };

            console.log(error);
        }
    }

    async createProduct(data) {
        try {
            await ProductModel.create(data);
            
            return {
                success: true,
                message: "Created product success",
            };
        } catch (error) {
            return {
                success: false,
                message: "Created product failed",
            };
        };
    }
}

const productService = new ProductService();

export default productService;