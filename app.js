const http = require('http');

// Create Server prends en paramètre une fonction qui sera appelé à chaque appel du serveur
// req : requête recu
// res : réponse envoyé

const server = http.createServer((req, res) => {
    //res.statusCode(404).end()
    //console.log(req.method)
    res.end('Voila la reponse du serveur du lundi!!!')
});

server.listen(process.env.PORT || 3011);