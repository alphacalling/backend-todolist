const TodoModel = require("../models/Todo.model");

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const todo = await TodoModel.findOneAndUpdate(
            { _id: id },
            { title, description }
        );
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
                message: "data updated successfully",
                data: todo
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: error.message,
            }
        )
    }
}