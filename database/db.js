const mongoose = require('mongoose');
const MongoDBUrl = 'mongodb+srv://andredlr31:cookie31@cluster0.jscrsct.mongodb.net/ProyectoFinal';
mongoose.connect(MongoDBUrl);
const db = mongoose.connection

function connectDB() {
    return new Promise((res, rej) => {
        mongoose
            .connect(mongoDBURL)
            .then(() => {
                console.log("Conexion a la DB establecida correctamente");
                res();
            })
            .catch((err) => {
                console.error("Error al conectar a la DB ", err);
                rej(err);
            });
    });
}

module.exports = connectDB;