//express server
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
//obtain bundle
const bundle = fs.readFileSync(path.join(__dirname, './dist/server.js'), 'utf8')
const index = fs.readFileSync('./index.html', 'utf-8')
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createBundleRenderer(bundle);

server.use('/dist', express.static(path.join(__dirname, './dist')));

//start server
server.get('*', (req, res) => { 
    renderer.renderToString({}, function (err, html) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else {
            res.send(index.replace('<div id=app></div>', html));
        };
    });
});  

server.listen(8080);