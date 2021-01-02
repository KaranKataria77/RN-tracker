const express = require('express');
const mongoose = require('mongoose');
const requiredAuth = require('../middleware/requiredAuth');
const router = express.Router();

const Track = mongoose.model('Track');

router.use(requiredAuth)

router.get('/tracks', async (req, res) => {
    const track = await Track.find({ userId: req.user._id});
    res.send(track)
})

router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;

    if(!name || !locations){
        res.status(422).send({error: "You must provide name and location"})
    }

    try{
    const track = new Track({name, locations, userId: req.user._id})
    await track.save();
    res.send(track)
    }catch(err){
        res.status(422).send({error: err.message})
    }
})

module.exports = router;