import { LightningElement } from "lwc";
import testMethod from '@salesforce/apex/LWCController.test'
export default class HelloWorld extends LightningElement {
  greeting = "World";
  error;
  
  changeHandler(event) {
    this.greeting = event.target.value;
  }

  connectedCallback() {
    testMethod({testParam: this.greeting})
    .then(result => {
      this.greeting = result;
    })
    .catch(error => {
      this.error = error;
    })
  }
}
