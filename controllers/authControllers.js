const authService = require("../services/authServices");
const AuthToken = require("../Models/Users");
const bcryptService = require("../services/bcryptService");
const User = require("../models/User");

function login(req, res) {
    const { email, contraseña } = req.body;

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(401).json({ message: "Credenciales Inválidas" });
        }
        const match = contraseña === user.contraseña;

        if (!match) {
            return res.status(401).json({ message: "Credenciales Inválidas" });
        }
        const token = authService.generateToken(user);
        res.json({ token })
    })

        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: "Error al iniciar sesion" });
        })
}

function logout(req, res) {
    const token = req.headers.authorization.split(" ")[1]
    AuthToken.findOneAndDelete({token})
    .then(()=>{
      res.status(200).json({message: "Sesión cerrada exitosamente" , error: {token}})
    })
    /* .catch((error)=>{
      console.error(error)
      res.status(500).json({message: "Error al iniciar sesion"})
    }) */
  }
  



  module.exports = {
    login,
    logout,
  };