// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';

  login(event: Event): void {
    event.preventDefault();

    // Now, you can access the entered email value from the 'email' property.
    console.log('Email entered:', this.email);

    // You can also send the email value to your server or perform other actions here.
    let bodydata = {
      "email": this.email
    };

    // Reset the email field after form submission if needed
    this.email = '';
  }
}
