import mongoose from "mongoose";
import orderService from "../services/OrderService.js";

class OrderController {
    async createOrder(req, res) {
        try {
            const fields = [
                "shippingInfo",
                "orderItems",
                "paymentMethod",
                "paymentInfo",
                "itemPrice",
                "tax",
                "shippingCharges",
                "totalAmount",
            ];
            const data = req.body;

            // Validation
            const validation = orderService.validationFields(fields, data);
            
            if (!validation.success)
                return res.status(500).send(validation);

            // Add user id to order data
            data.user = req.user._id;
            
            // Create new order:
            const createStatus = await orderService.createNewOrder(data);

            if (!createStatus) 
                return res.status(500).send({
                    success: false,
                    message: "Create order failed",
                });

            return res.status(201).send({
                success: true,
                message: "Create order success",
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: "Error in create order API",
            });
        }
    }
}

const orderController = new OrderController();

export default orderController;