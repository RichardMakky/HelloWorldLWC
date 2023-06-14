import { LightningElement } from "lwc";
import testMethod from '@salesforce/apex/LWCController.test'
export default class HelloWorld extends LightningElement {
  greeting = "World";
  changeHandler(event) {
    this.greeting = event.target.value;
  }

  connectedCallback() {
    testMethod({testParam: this.greeting})
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })
  }
}
