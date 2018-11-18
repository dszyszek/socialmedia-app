const express = require('express');
const mongoose = require('mongoose');

const {authenticate} = require('../../middleware/authenticate');
const {Post} = require('../../models/Post');
const validateInput = require('../../validation/validateInput');

const router = express.Router();


// GET routes

router.get('/test', (req, res) => {
    return res.json({msg: 'Posts works'});
});


router.get('/', authenticate, (req, res) => {
    Post.find({})
    .sort({date: -1})
    .then( docs => {
        res.json(docs);
    })
    .catch(e => res.status(400).json({error: 'Cannot fetch posts!'}));
});

router.get('/:id', authenticate, (req, res) => {
    Post.find({_id: req.params.id})
    .then( docs => {
        res.json(docs);
    })
    .catch(e => res.status(400).json({error: 'Cannot fetch posts!'}));
});



// POST routes

router.post('/', authenticate, (req, res) => {

    const {isValid, errors} = validateInput(req.body, ['text']);
    if (!isValid) return res.status(400).json(errors);


    const post = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    post.save().then(docs => res.json(docs))
    .catch(e => res.status(400).json({error: 'Cannot do that'}));
});


module.exports = router;
