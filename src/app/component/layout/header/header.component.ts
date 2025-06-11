import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  login = true
  constructor (private router:Router){
    if(typeof window !== 'undefined' && localStorage.getItem('token') == null){
      this.login = false
    }
  }
  logout(){
    this.router.navigateByUrl('login')
    localStorage.removeItem('token')
  }
}
