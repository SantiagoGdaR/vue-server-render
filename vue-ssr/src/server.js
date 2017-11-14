import { createApp } from './main.js';

export default context => {
    // since there could potentially be asynchronous route hooks or components,
    // we will be returning a Promise so that the server can wait until
    // everything is ready before rendering.
    return new Promise((resolve, reject) => {
        try {
            const { app } = createApp();
            resolve(app);
        } catch (e) {
            reject();
        }        
    });
}