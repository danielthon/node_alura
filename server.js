const app = require('./src/config/custom-express');

app.listen(3000, function() {
    console.log(`Servidor rodando na porta 3000`);
});

app.get('/', function(req, resp) {
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Teste Testando a Testa</h1>
            </body>
        </html>
        `
    );
});

app.get('/livros', function(req, resp) {
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Livrosssss</h1>
            </body>
        </html>
        `
    );
});

/*
const http = require('http');

const servidor = http.createServer(function (req, resp) {
    
    let html = '';

    if(req.url == '/') {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Teste Testando a Testa</h1>
            </body>
        </html>
        `;
    } else if (req.url == '/livros') {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Livrosssss</h1>
            </body>
        </html>
        `;
    }
    
    resp.end(html);
});
servidor.listen(3000);
*/
