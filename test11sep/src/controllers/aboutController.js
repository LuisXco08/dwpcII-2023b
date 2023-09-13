const express = require('express');
const router = express.Router();

router.get('/tec', (req, res) => {
  // Genera una imagen aleatoria del Instituto
  const randomImage = 'ruta/a/imagen/aleatoria.jpg';

  res.render('about', { instituteImage: randomImage });
});

module.exports = router;