
import Vue from 'vue'
import App from './App.vue'

// export a factory function for creating fresh app
// instances
export function createApp() {

    const app = new Vue({
        // the root instance simply renders the App component.
        render: h => h(App)
    });

    return { app };
}