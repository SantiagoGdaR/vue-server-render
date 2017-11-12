//express server
const server = require('express')();
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createRenderer({
    //set template
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
});

//start server
server.get('*', (req, res) => { 
    //we create the app in every request
    //to avoid shared instances cross-request
    //state pollution
    const createApp = require('./app.js');
    
    //context to use as data source
    //in the template for interpolation
    const context = {
        title: 'Vue JS - Server Render',
        meta: `
            <meta description="vuejs server side render">
        `
    };
    renderer.renderToString(createApp, context, (err, html) => {
      if (err) {
        res.status(500).end(err);
        return;
      };
      res.end(html.toString());
    });
});  

server.listen(8080);