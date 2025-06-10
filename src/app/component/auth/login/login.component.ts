import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authservices: AuthService,private router:Router) {
    if(typeof window !== 'undefined' &&localStorage.getItem('token') !== null){
      router.navigateByUrl('')
    }
   }

  userdata = new FormGroup({
    email: new FormControl('john@mail.com'),
    password: new FormControl('changeme')
  })
  login() {
    this.authservices.login(this.userdata.value).subscribe((data: any) => {
      localStorage.setItem('token',data.access_token)
      this.router.navigateByUrl('')
    })
  }
}
