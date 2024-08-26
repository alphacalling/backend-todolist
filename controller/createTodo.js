const TodoModel = require("../models/Todo.model");


exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await TodoModel.create({ title, description });
        res.status(200).json(
            {
                success: true,
                message: "todo list created successfully",
                data: response
            }
        )
    } catch (error) {
        res.status(501).json(
            {
                success: false,
                message: "Internal Server Error",
                error
            }
        )
        console.error(error)
    }
}