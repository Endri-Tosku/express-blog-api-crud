const dataPost = require('./../data/posts')

// INDEX
function index(req, res) {
    res.json(dataPost);
}

// SHOW
function show(req, res) {
    // recuperiamo l'id dall'URL e lo convertiamo in numero
    const idNum = parseInt(req.params.id);

    const post = dataPost.find(post => post.id === idNum);

    // controllo se il post esiste
    if (!post) {

        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // restituiamo il post trovato
    res.json(post);
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

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = dataPost.find(post => post.id === id);

    // piccolo controllo
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovata"
        })
    }

    // rimozione tramite indexOf
    dataPost.splice(dataPost.indexOf(post), 1);

    console.log(dataPost);

    // forziamo status secondo convenzioni REST che chiude anche function
    res.sendStatus(204)
}

// esportiamo tutte le funzioni
module.exports = { index, show, store, update, destroy };