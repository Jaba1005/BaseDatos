const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Articulo', articuloSchema);
