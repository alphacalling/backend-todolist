const TodoModel = require("../models/Todo.model")

exports.getTodo = async (req, res) => {
    try {
        const todo = await TodoModel.find({});
        res.status(200).json(
            {
                success: true,
                data: todo,
                message: "data fetched successfully",
            }
        )
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                success: false,
                error: error.message
            }
        )
    }
}