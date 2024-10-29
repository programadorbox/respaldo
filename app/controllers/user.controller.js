const db = require('../models');
const User = db.users;
const Bootcamp = db.bootcamps;

exports.getUsersWithBootcamps = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{
        model: Bootcamp,
        as: 'bootcamps',  // Debe coincidir con el alias en la relación belongsToMany
        through: { attributes: [] },  // Evita que los atributos de la tabla intermedia aparezcan en la consulta
      }]
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.update(req.body, { where: { id } });
    if (updatedUser[0] === 1) {
      res.send({ message: "Usuario actualizado con éxito." });
    } else {
      res.send({ message: "No se pudo actualizar el usuario." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// user.controller.js
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.destroy({ where: { id } });
    if (deletedUser) {
      res.send({ message: "Usuario eliminado con éxito." });
    } else {
      res.send({ message: "No se encontró el usuario." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// user.controller.js
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({ firstName, lastName, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

