const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      //need to include tag details
      include: [{model: Product, through: ProductTag}]
    });
    res.status(200).json(tagData);
  } catch (err) {//error handling
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product, through: ProductTag}]
    });
    if (!tagData) {
      res.status(404).json({ message: 'NO TAG WITH THAT ID!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(
      {
        //need to get the fields that need to be updated
        tag_name: req.body.tag_name
      },
      {
        //target it with its id
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const dataDelete = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(dataDelete); 
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
