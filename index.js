const express = require("express");
const usersRoutes = require("./routes/usersRoutes");
const connectDb = require("./database/db");
const app = express();
const PORT= 3010;

//middleware para parsear

app.use(express.json());

//RUTAS 
app.use("/api/users", usersRoutes);

connectDb();

app.listen(PORT,()=>{     
    console.log("Servidor corriendo en el puerto: "+ PORT) 
});


