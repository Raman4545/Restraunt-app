// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showModal = false;
  validationError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    // Check if the form is valid
    if (this.loginForm.valid) {
      // Perform any additional logic here
      this.showModal = true;
      console.log('Login successful. Welcome, ' + this.loginForm.get('username')?.value + '!');
    } else {
      // Display the error message in modal
      this.validationError = 'Please fix the form errors before submitting.';
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
