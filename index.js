const http = require('http');
const fs = require('fs');

const renderingPageTemplate = require('./renderingPageTemplate');

const server = http.createServer((req, res) => {
    const path = req.url;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    if (path === '/index') {
        const contentJSON = fs.readFileSync('index.json', 'utf-8');
        
        renderingPageTemplate(contentJSON, res);
    }
    
    if (path === '/contacts') {
        const contentJSON = fs.readFileSync('contacts.json', 'utf-8');

        renderingPageTemplate(contentJSON, res);
    }
    
    if (path !== '/contacts' && path !== '/index') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('Страница не найдена');
        res.write('<style>body {font-size: 25px; margin-right: 15px}</style>');

        res.end();

        return;
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
