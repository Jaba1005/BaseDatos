const express = require('express');
const router = express.Router();
const Articulo = require('../models/Articulo');

// Obtener todos los artículos
router.get('/', async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear un nuevo artículo
router.post('/', async (req, res) => {
  try {
    const nuevoArticulo = new Articulo({
      titulo: req.body.titulo,
      autor: req.body.autor,
      contenido: req.body.contenido,
      fecha: req.body.fecha || new Date()
    });

    const articuloGuardado = await nuevoArticulo.save();
    res.status(201).json(articuloGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener un artículo por ID
router.get('/:id', async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    if (!articulo) return res.status(404).json({ message: 'Artículo no encontrado' });
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Actualizar un artículo
router.put('/:id', async (req, res) => {
  try {
    const articulo = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(articulo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar un artículo
router.delete('/:id', async (req, res) => {
  try {
    await Articulo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Artículo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
