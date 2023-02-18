const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products_tags` endpoint

// get all products tags
router.get('/', async (req, res) =>
{
  try
  {
    const productsTagsData = await ProductTag.findAll({
      // Include associated Products
    });
    res.status(200).json(productsTagsData);
  } catch (err)
  {
    res.status(500).json(err);
  }
});

module.exports = router;
