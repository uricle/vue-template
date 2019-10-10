import Vue from 'vue';
import * as template from './app-template.html';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    template
})
export default class App extends Vue {
    teststring: string = '';
}
