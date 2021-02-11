const mongoose = require('mongoose');

const jokeschema = new mongoose.Schema({

    setup: String,
    punchline: String,
})

const joke = mongoose.model('joke',jokeschema);

module.exports=joke;