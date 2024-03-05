# validateFormDataAndResponse

validateFormDataAndResponse is a function designed to verify whether the data in a form has been altered since it was last submitted or loaded. Its purpose is to compare the current state of the form data with its previous state and determine if any changes have occurred. If changes are detected, the function returns false to indicate that the data has been modified. Otherwise, it returns true, indicating that the data remains unchanged. This function is useful for ensuring data integrity and preventing unintended modifications to form data.

## ```Features```

 - Form Data Validation: Validates whether the data in a form has changed since its last submission or loading.
 - Change Detection: Detects modifications made to the form data to maintain data integrity.
 - Boolean Response: Returns a boolean value (true or false) indicating whether changes have occurred.
 - Easy Integration: Simple to integrate into existing codebases or projects.
 - Customizable: Allows for customization to fit specific validation requirements or scenarios.
 - Enhances Data Security: Ensures that only authorized changes are accepted, enhancing data security.
 - Prevents Unintended Modifications: Helps prevent unintended modifications to form data, reducing the risk of errors or data loss.
 - Error Prevention: Facilitates error prevention by alerting users or applications when data has been altered.
 - Lightweight: Lightweight and efficient implementation, minimizing performance overhead.
 - Clear Documentation: Well-documented with clear instructions on usage and integration.
 - Scalable: Scales well for projects of various sizes, from small applications to enterprise-level systems.
 - Tested and Reliable: Thoroughly tested for reliability and robustness to ensure consistent performance.
 - Version Control: Easily managed through version control systems like Git for tracking changes and collaborating with teams.
 - Cross-platform Compatibility: Compatible with a wide range of platforms and frameworks for versatility in development environments.
 - Continuous Support: Provides ongoing support and maintenance to address any issues or updates.

## ```Installation```

Install the package via npm:

```curl 
npm install ngform-validation-helper
````

## ```Usage```

Here's a quick example to get you started:


## Parameters
- condition (boolean): Specifies whether to validate form data and response object.
- formData (object): Object containing form data to be validated.
- responseObject (optional object, applicable when the first boolean parameter is set to true): Object containing response data to be validated against the form data.
- strictCheck (boolean, optional): If set to true, performs strict checking of response object keys against form data keys. Default is false.



```js 
const validateFormDataAndResponse = require('./validateFormDataAndResponse');

// Example 1: Basic form data validation
const formData = {
    username: 'john_doe',
    password: 'password123'
};
const responseObj = {
    username: 'john_doe',
    password: 'password123'
};
const isValid = validateFormDataAndResponse(true, formData, responseObj);
console.log(isValid); // Output: true

// Example 2: Strict response object key checking
const formData2 = {
    username: 'john_doe',
    password: 'password123'
};
const responseObj2 = {
    username: 'john_doe',
    password: 'password456'
};
const isValid2 = validateFormDataAndResponse(false, formData2, responseObj2, true);
console.log(isValid2); // Output: false

```

## Angular Example: For new form

```ts
import { Component } from '@angular/core';
import { validateFormDataAndResponse } from './validateFormDataAndResponse'; // Import the function

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  // New form data (empty)
  formData = {
    username: '',
    password: ''
  };

  isSubmitDisabled = true; // Initially disable the submit button

  constructor() { }

  onSubmit() {
    // Handle form submission
  }

  onInputChange() {
    // Check form validity whenever there's an input change
    this.isSubmitDisabled = !validateFormDataAndResponse(true, this.formData);
  }
}


```

## And the corresponding template (my-form.component.html):

```html
<form (ngSubmit)="onSubmit()">
  <label>Username:</label>
  <input type="text" name="username" [(ngModel)]="formData.username" (input)="onInputChange()">
  <label>Password:</label>
  <input type="password" name="password" [(ngModel)]="formData.password" (input)="onInputChange()">
  <button type="submit" [disabled]="isSubmitDisabled">Submit</button>
</form>


```

## Example: compare with responce

```ts
import { Component } from '@angular/core';
import { validateFormDataAndResponse } from './validateFormDataAndResponse'; // Import the function

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  // New form data
  formData = {
    username: 'john_doe',
    password: 'password123'
  };

  // Response object
  responseObject = {
    username: 'john_doe',
    password: 'password123'
  };

  isSubmitDisabled = true; // Initially disable the submit button

  constructor() { }

  onSubmit() {
    // Handle form submission
  }

  onInputChange() {
    // Check form validity whenever there's an input change
    this.isSubmitDisabled = !validateFormDataAndResponse(false, this.formData, this.responseObject);
  }
}


```

## And the corresponding template (my-form.component.html):

```html
<form (ngSubmit)="onSubmit()">
  <label>Username:</label>
  <input type="text" name="username" [(ngModel)]="formData.username" (input)="onInputChange()">
  <label>Password:</label>
  <input type="password" name="password" [(ngModel)]="formData.password" (input)="onInputChange()">
  <button type="submit" [disabled]="isSubmitDisabled">Submit</button>
</form>

```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support
If you encounter any issues or have any questions, please file an issue on the GitHub issues page.

## Acknowledgments

Thanks to all the contributors who have helped to make this project better.

