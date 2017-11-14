//express server
const server = require('express')();
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createRenderer({
    //set template
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
});
const entryServer = require('./entry-server.js');


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