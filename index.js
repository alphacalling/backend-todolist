const express = require('express');
const ConnectDB = require("./config/database")
const { MyPort } = require('./config');
const todoRoutes = require("./routes/todoRoutes")

const app = express();

// middleware parsing 
app.use(express.json());

// default middleware route 
app.use("/api/v1", todoRoutes);

app.listen(MyPort || 9000, () => {
    console.log("server is live at 3000");

});

// default route 
app.get('/', (req, res) => {
    res.send("<h1>Welcome to TodoList</h1>")
})

ConnectDB();