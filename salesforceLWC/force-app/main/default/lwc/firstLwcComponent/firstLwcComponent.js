import { LightningElement } from 'lwc';

export default class FirstLwcComponent extends LightningElement {

    greeting = 'Hello World!';

    changeHandler(event) {
        this.greeting = event.target.value;
    }
    
}