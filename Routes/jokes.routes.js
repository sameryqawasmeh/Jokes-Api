const JokesController = require('../Controllers/jokes.controllers');
  module.exports = app => { 
         app.post('/api/addNewJoke', JokesController.createJoke); 
        app.get('/api/getAllJokes', JokesController.getAllJokes); 
        app.post('/api/deleteJoke/:id', JokesController.deleteJoke); }
