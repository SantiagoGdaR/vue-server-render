//express server
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
//obtain bundle
const bundle = fs.readFileSync(path.join(__dirname, './dist/server.js'), 'utf8')
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
    //set template
    template: fs.readFileSync('./index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

//start server
server.get('*', (req, res) => { 
    //context to use as data source
    //in the template for interpolation
    const context = {
        title: 'Vue JS - Server Render',
        meta: `
            <meta description="vuejs server side render">
        `
    };

    renderer.renderToString({}, context, (err, html) => {
        if (err) {
            res.status(500).end(err);
        } else {
            res.end(html);
        };
    });
});  

server.listen(8080);