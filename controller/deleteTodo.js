// import the model

const Todo = require('../models/Todo');

// define route handler

exports.deleteTodo = async(req, res) =>{
    try{
        // extract title and description from body

        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:'Todo Deleted',
        })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}