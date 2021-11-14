const express = require('express');
const router = express.Router();
const Appartments = require('../models/appartments');
const Images = require('../models/images');
const Extras = require('../models/extras');
const Coordinates = require('../models/coordinates');

router.get('/appartments', (req, res) =>
    Appartments.findAll()
        .then((appartments) => {
            res.json(appartments);
            // res.sendStatus(200);
        })
        .catch((err) => console.log(err))
);

router.get('/images', (req, res) =>
    Images.findAll()
        .then((images) => {
            res.json(images);
            // res.sendStatus(200);
        })
        .catch((err) => console.log(err))
);

router.get('/extras', (req, res) =>
    Extras.findAll()
        .then((extras) => {
            res.json(extras);
            // res.sendStatus(200);
        })
        .catch((err) => console.log(err))
);

router.get('/coordinates', (req, res) =>
    Coordinates.findAll()
        .then((coordinates) => {
            res.json(coordinates);
            // res.sendStatus(200);
        })
        .catch((err) => console.log(err))
);

module.exports = router;
