const express = require('express');
const router = express.Router();

router.get('/tec', (req, res) => {
  // Genera una imagen aleatoria del Instituto
  const randomImage = 'ruta/a/imagen/aleatoria.jpg';

  const data = {
    name: 'Tec de Gustavo A Madero',
    description: 'algo',
    mission: '...',
    values: '',
    image: randomImage,
  };

  res.json(data);
});

module.exports = router;