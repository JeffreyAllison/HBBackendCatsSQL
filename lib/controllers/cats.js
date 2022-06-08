const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchCats = cats.find((cat) => cat.id === id);
    res.json(matchCats);
  })

  .get('/', (req, res) => {
    const allCats = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(allCats);
  });
