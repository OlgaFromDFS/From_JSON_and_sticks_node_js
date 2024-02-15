const http = require('http');
const fs = require('fs');

const renderPage = require('./renderPage');

const server = http.createServer((req, res) => {
    const path = req.url;
    const fileName = path === '/' ? 'index' : String(path).slice(1);

    try {
        const contentJSON = fs.readFileSync(`${fileName}.json`, 'utf-8');

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        
        renderPage(contentJSON, res);
    } catch {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('Страница не найдена');
        res.write('<style>body {font-size: 25px; margin-right: 15px}</style>');

        res.end();
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
