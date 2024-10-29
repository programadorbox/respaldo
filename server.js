const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./app/routes/user.routes');
const bootcampRoutes = require('./app/routes/bootcamp.routes');

app.use(cors());
app.use(express.json());

// Servir archivos estáticos de la carpeta public
app.use(express.static('public'));

// Usar las rutas de la API
app.use(userRoutes);
app.use(bootcampRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
