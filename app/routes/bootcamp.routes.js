const express = require('express');
const router = express.Router();
const bootcampController = require('../controllers/bootcamp.controller');

// Ruta para crear un nuevo bootcamp
router.post('/api/bootcamp', bootcampController.createBootcamp);

// Ruta para agregar un usuario a un bootcamp
router.post('/api/bootcamp/adduser', bootcampController.addUserToBootcamp);

// Ruta para obtener un bootcamp por ID
router.get('/api/bootcamp/:id', bootcampController.getBootcampById);

// Ruta para obtener todos los bootcamps
router.get('/api/bootcamp', bootcampController.getAllBootcamps);

module.exports = router;


