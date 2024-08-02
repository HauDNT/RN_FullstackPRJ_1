import mongoose from "mongoose";
import productService from "../services/ProductService.js";
import { getDataUri } from "../utils/Features.js";
import cloudinary from "cloudinary";

class ProductController {
    async getAllProducts (req, res) {
        try {
            const products = productService.getAllProduct();

            return res.status(200).send({
                success: true,
                message: "Get all product success",
                products,
            });
            
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: "Error in get all product API",
                error,
            });
        }
    }

    async getSingleProduct (req, res) {
        try {
            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ error: 'Invalid product ID' });
            }

            const product = productService.getAProduct(id);

            // Validation
            if (!product) {
                return res.status(404).send({
                    success: false,
                    message: "Product not found",
                });
            }

            return res.status(200).send({
                success: true,
                message: "Get infor product success",
                product,
            });
            
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: "Error in get single product API",
                error,
            });
        }
    } 

    async createProduct (req, res) {
        try {
            const fields = ["name", "description", "price", "category", "stock"];
            let data = req.body;

            // Validation
            const validation = productService.validationFields(fields, data);

            if (validation.success === false) {
                return res.status(404).send(validation);
            };

            if (!req.file) {
                return res.status(500).send({
                    success: false,
                    message: "Please provide images",
                });
            };

            const file = getDataUri(req.file);
            const cdb = await cloudinary.v2.uploader.upload(file.content);
            const image = {
                public_id: cdb.public_id,
                url: cdb.secure_url,
            };

            data = { 
                ...data, 
                images: [image],
                price: Number(data.price),
                stock: Number(data.stock),
            };

            productService.createProduct(data);

            return res.status(200).send("Create product success");
        } catch (error) {
            console.log(error);
            
            return res.status(500).send({
                success: false,
                message: "Error in create product API",
                error,
            });
        }
    }





}

const productController = new ProductController();

export default productController;