function renderingPageTemplate(contentJSON, res) {
    const content = JSON.parse(contentJSON);
    
    res.write(`<html>
                    <head>
                        <body>
                            <h1>${content.title}</h1>
                            <p>${content.content}</p>
                        </body>
                    </head>
                </html>`);
    res.write('<style>body {font-size: 25px; margin-right: 15px}</style>');

    res.end();
}

module.exports = renderingPageTemplate;
