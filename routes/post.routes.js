const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({ message:'Bonjour je suis node'});
});

router.post('/', (req,res) => {
    res.json({ message:'Bonjour je suis node'});
});

module.exports = router;