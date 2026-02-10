// INDEX
function index(req, res) {
    res.send('Lista dei posts');
}

// SHOW
function show(req, res) {
    res.send('Dettagli del post ' + req.params.id);
}

// STORE
function store(req, res) {
    res.send('Creazione nuovo post');
}

// UPDATE
function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

// DESTROY
function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

// esportiamo tutte le funzioni
module.exports = { index, show, store, update, destroy };