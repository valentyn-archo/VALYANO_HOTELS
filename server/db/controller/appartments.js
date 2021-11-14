const express = require('express');
const router = express.Router();
const Appartments = require('../model/appartments');
const Images = require('../model/images');
const Extras = require('../model/extras');
const Coordinates = require('../model/coordinates');

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
