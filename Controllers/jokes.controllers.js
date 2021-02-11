// import Joke from '../Models/jokes.model'
const Joke = require('../Models/jokes.models');


module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
        .then(joke => response.json(joke))
        .catch(err => response.json(err));
}
module.exports.getAllJokes = (request, response) => {
        Joke.find({})
        .then(jokes => response.json(jokes))
        .catch(err => response.json(err));
    }
    module.exports.deleteJoke = (request, response) => {
     Joke.remove({_id: request.params.id})
    .then(deletedJoke => {

    })
    .catch(err => res.json(err));
}