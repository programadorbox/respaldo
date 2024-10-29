const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller'); // Asegúrate de la ruta correcta

// Ruta POST para crear un nuevo usuario
router.post('/api/user', userController.createUser);

// Ruta PUT para actualizar un usuario por ID
router.put('/api/user/:id', userController.updateUser);

// Ruta DELETE para eliminar un usuario por ID
router.delete('/api/user/:id', userController.deleteUser);

module.exports = router;

