const TodoModel = require("../models/Todo.model");

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await TodoModel.findById();
        if (!todo) {
            return res.status(404).json(
                {
                    success: false,
                    message: "no data found for such id",
                    data: todo
                }
            )
        }
        res.status(200).json(
            {
                success: true,
                message: "data fetched for id successfully",
                data: todo
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}