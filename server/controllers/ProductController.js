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
            return res.status(500).send({
                success: false,
                message: "Error in create product API",
                error,
            });
        }
    }

    async updateProduct(req, res) {
        try {
            // Find product
            const product = await productService.getAProduct(req.params.id);

            // Validation
            if (!product) {
                return res.status(404).send({
                    success: false,
                    message: "Product not found",
                })
            };

            const fields = ["name", "description", "price", "category", "stock"];
            let data = req.body;

            // Validation
            const validation = productService.validationFields(fields, data);

            if (validation.success === false) {
                return res.status(404).send(validation);
            };

            // Cập nhật các trường nếu có trong req.body
            fields.forEach(field => {
                if (req.body[field] !== undefined) {
                    product[field] = req.body[field];
                }
            });

            await product.save();

            return res.status(200).send({
                success: true,
                message: "Product details updated success",
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: "Error in update product API",
                error,
            });
        }
    }

    async updateProductImages (req, res) {
        try {
            // Find product
            const product = await productService.getAProduct(req.params.id);

            // Validation & check file:
            if (!product) {
                return res.status(404).send({
                    success: false,
                    message: "Product not found",
                })
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

            // Save data:
            product.images.push(image);
            await product.save();

            return res.status(200).send("Product image updated success");

        } catch (error) {
            console.log(error);
            
            return res.status(500).send({
                success: false,
                message: "Error in update images product API",
                error,
            });
        }
    }

    async deleteProduct (req, res) {
        try {
            // Find product
            const product = await productService.getAProduct(req.params.id);

            // Validation & check file:
            if (!product) {
                return res.status(404).send({
                    success: false,
                    message: "Product not found",
                })
            };

            // Find and delele images in cloudinary
            for (let index = 0; index < product.images.length; index++) {
                await cloudinary.v2.uploader.destroy(product.images[index].public_id);
            };

            // Remove item:
            await product.deleteOne();

            return res.status(200).send({
                success: true,
                message: "Product deleted success",
            });
        } catch (error) {
            console.log(error);
            
            return res.status(500).send({
                success: false,
                message: "Error in update images product API",
                error,
            });
        }
    }

    async deleteImage (req, res) {
        try {
            // Find product
            const product = await productService.getAProduct(req.params.id);
            
            // Validation
            if (!product) 
                return res.status(404).send({
                    success: false,
                    message: "Product not found",
                });

            // Image id find
            const imageId = req.query.id;
            if (!imageId) 
                return res.status(404).send({
                    success: false,
                    message: "Product image not found",
                });
            
            let isExisting = -1;
            product.images.forEach((item, index) => {
                if (item._id.toString() === imageId.toString()) 
                    isExisting = index;
            });

            if (isExisting < 0) 
                return res.status(404).send({
                    success: false,
                    message: "Image not found",
                });

            // Delete product image
            await cloudinary.v2.uploader.destroy(product.images[isExisting].public_id);
            product.images.splice(isExisting, 1);

            // Save
            await product.save();

            return res.status(200).send({
                success: true,
                message: "Delete image success",
            });
        } catch (error) {
            console.log(error);

            return res.status(500).send({
                success: false,
                message: "Error in delete images product API",
                error,
            });
        }
    }
}

const productController = new ProductController();

export default productController;