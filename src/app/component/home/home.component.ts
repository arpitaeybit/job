import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../layout/header/header.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, HeaderComponent],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
}
