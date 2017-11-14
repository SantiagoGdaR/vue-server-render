//express server
const server = require('express')();
const fs = require('fs');
const path = require('path');
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createRenderer({
    //set template
    template: fs.readFileSync('./index.html', 'utf-8')
});
const entryServer = require('./src/entry-server.js');

server.use('/dist', express.static(path.join(__dirname, './dist')));
//start server
server.get('*', (req, res) => { 

    entryServer({ url: req.url }).then((app) => {    
        //context to use as data source
        //in the template for interpolation
        const context = {
            title: 'Vue JS - Server Render',
            meta: `
                <meta description="vuejs server side render">
            `
        };

        renderer.renderToString(createApp.app, context, (err, html) => {
            if (err) {
                res.status(500).end(err);
            } else {
                res.end(html);
            };
        });
    });
});  

server.listen(8080);