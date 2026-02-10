// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const routes = express.Route();

// rotte CRUD
// index
routes.get('/', function (req, res) {
    res.send('Lista dei posts');
});

// show
routes.get('/:id', function (req, res) {
    res.send('Dettagli della post ' + req.params.id);
});

// Create
routes.post('/', function (req, res) {
    res.send('Creazione nuova post');
});

// Update 
routes.put('/:id', function (req, res) {
    res.send('Modifica integrale della post ' + req.params.id);
});

// Delete 
routes.delete('/:id', function (req, res) {
    res.send('Eliminazione della post ' + req.params.id);
});

// esporta l'istanza di queste rotte
module.exports = routes;