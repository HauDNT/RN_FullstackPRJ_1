import CategoryModel from "../models/CategoryModel.js";
import ProductModel from "../models/ProductModel.js";

class CategoryService {
    async createCategory(data) {
        try {
            await CategoryModel.create(data);

            return true;
        } catch (error) {
            return false;
        }
    }

    async getAllCategories() {
        const categories = await CategoryModel.find({});

        return categories;
    }

    async updateCategory(id, newCategoryData) {
        try {
            // Update product category before delete them
            const products = await ProductModel.find({ category: id });

            // return products;

            for (let product of products) {
                product.category = newCategoryData;
                await product.save();
            }

            await CategoryModel.findByIdAndUpdate(id, newCategoryData, { new: true });
            return true;
        } catch (error) {
            console.log(error);
            
            return false;
        }
    }

    async deleteCategory(id) {
        try {
            // Update product category before delete them
            const products = ProductModel.find({ category: id });

            for(let i = 0; i < products.length; i++) {
                const product = products[i];
                product.category = undefined;
                await product.save();
            };

            await CategoryModel.findByIdAndDelete(id);

            return true;
        } catch (error) {
            return false;
        }
    }
}

const categoryService = new CategoryService();

export default categoryService;