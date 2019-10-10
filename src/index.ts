import Vue from 'vue';
import App from './app';
import test from './component/test/test';

Vue.component('test', test);

// event bus
export const eventBus = new Vue();

// app
const v = new Vue({
    el: '#app',
    components: { App },
});
