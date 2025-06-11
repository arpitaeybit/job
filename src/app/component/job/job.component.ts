import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-job',
  imports: [HeaderComponent],
  providers: [HomeService],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  job: any

  constructor(private homeservices: HomeService, private route: ActivatedRoute) {
    let id
    this.route.queryParamMap.subscribe((queryparams: any) => {
      id = queryparams.get('id')
    })
    this.getjobbyid(id)
  }

  getjobbyid(id: any) {
    this.homeservices.getalljob().subscribe((data: any) => {
      data.jobs.map((item: any) => { if (item.id == id) { this.job = item } })
    })
    // this.job = this.job.find((item:any) =>{item.id == id})
  }
}
