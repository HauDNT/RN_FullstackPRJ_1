import OrderModel from "../models/OrderModel.js";
import ProductModel from "../models/ProductModel.js";

class OrderService {
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

    async createNewOrder(data) {
        try {
            // Create order
            await OrderModel.create(data);

            // Update stock
            const orderItems = data.orderItems;

            for (let i = 0; i < orderItems.length; i++) {
                // Find product
                const product = await ProductModel.findById(orderItems[i].product);
                product.stock -= orderItems[i].quantity;
                await product.save();
            }

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

const orderService = new OrderService();

export default orderService;