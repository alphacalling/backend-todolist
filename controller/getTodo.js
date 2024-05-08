// import the model

const Todo = require('../models/Todo');

// define route handler

exports.getTodo = async(req, res) =>{
    try{
        // fetch all todos items from database
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire todo item is fetched",
        });
    }
    catch(error){
        console.erroe(error);
        res.status(500).json({
            success:false,
            error:err.message,
            mesasge:"Server error",
        });
    }
}
exports.getTodoById = async(req, res) => {
    try{
        // extract todo items basis on id
        const id = req.param.id;
        const todo = await Todo.findById( {_id: id})


        //if data is given for id is not found

        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No data is found on given Id",
            })
        }
         // if data is found for given id

         res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
         })
    }
    catch(error) {
        console.erroe(error);
        res.status(500).json({
            success:false,
            error:err.message,
            mesasge:"Server error",
        })
    }
}