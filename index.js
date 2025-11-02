const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const articulosRoutes = require('./routes/articulos');


dotenv.config(); // Carga las variables del archivo .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Rutas principales
app.use('/api/articulos', articulosRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
