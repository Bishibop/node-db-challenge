const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.find()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/', (req, res) => {
  const resourceData = req.body;
  console.log('posting new resource', resourceData);

  Resources.add(resourceData)
    .then(resource => {
      console.log('created resource: ', resource);
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

module.exports = router;
