
const express = require('express');
const router = express.Router();
const Appartments = require('../model/appartments');

router.get('/', (req, res) =>
    Appartments.findAll()
    .then(rooms => {
        res.json(rooms)
        // res.sendStatus(200);
    })
    .catch(err => console.log(err)));

module.exports = router;