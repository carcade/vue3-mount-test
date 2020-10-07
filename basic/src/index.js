// import {createApp} from 'vue';
import * as Vue from 'vue';

const App = {
    data() {
        return {
            message: 'Hello world'
        }
    }
}

Vue.createApp(App).mount('#app')