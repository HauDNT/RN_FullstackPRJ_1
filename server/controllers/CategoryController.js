import categoryService from "../services/CategoryService.js";

class CategoryController {
    async createCategory(req, res) {
        try {
            const { category } = req.body;

            // Validation
            if (!category)
                return res.status(404).send({
                    success: false,
                    message: "Please provide category name",
                });

            const createStatus = await categoryService.createCategory({category});

            if (createStatus)
            {
                return res.status(201).send({
                    success: true,
                    message: "Created category success",
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in create category API",
            });
        }
    }

    async getAllCategories(req, res) {
        try {
            const categories = await categoryService.getAllCategories();

            if (!categories) 
                return res.status(404).send({
                    success: false,
                    message: "Not found categories API",
                });

            return res.status(200).send({
                success: true,
                categories,
            });
            
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in get all categories API",
            });
        }
    }

    async updateACategory(req, res) {
        try {
            // Tạm thời ngừng tại đây, sẽ tiếp tục sau khi hoàn thiện xong Startup Mobile App



            
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in update category API",
            });
        }
    }

    async deleteACategory(req, res) {
        try {
            const id = req.params.id;

            const deleteStatus = await categoryService.deleteCategory(id);

            if (!deleteStatus) {
                return res.status(404).send({
                    success: false,
                    message: "Delete category failed",
                });
            }

            return res.status(200).send({
                success: true,
                message: "Delete category success",
            });
            
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in delete categories API",
            });
        }
    }
}

const categoryController = new CategoryController();
export default categoryController;
