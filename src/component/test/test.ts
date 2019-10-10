import * as template from './test-template.html';
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import './test.scss';

@Component({
    template
})
export default class Test extends Vue {
    testMember: string = 'test';
}
