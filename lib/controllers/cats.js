const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchCats = await Cat.getById(id);
    res.json(matchCats);
  })

  .get('/', async (req, res) => {
    const Cats = await Cat.getAll();
    const newCats = Cats.map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
      };
    });
    res.json(newCats);
  });
