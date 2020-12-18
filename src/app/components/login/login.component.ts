import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData: { username: string, password: string } = {
    username: '',
    password: ''
  }

  handleSubmit() {
    if (this.loginData.username == 'romain' && this.loginData.password == '1234') {
      this.router.navigateByUrl('/catalog')
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
