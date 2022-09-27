const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then(dbCatData => {
    if (!dbCatData) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.json(dbCatData);
  })
  .catch(err => {
    res.status(500).json({ message: err.message });
});
});

router.get('/:id', (req, res) => {

  Category.findOne({
    where: {
    id: req.params.id
  },
  include: {
    module: 'products',
    attributes: ['id', 'product_name','price','stock','category_id']
  }
  })
  .then(dbCatData => {
    if(!dbCatData) {
      res.status(404).json({message: 'No categories found'});
      return;
    }
    res.json(dbCatData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  });

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
