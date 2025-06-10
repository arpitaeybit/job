import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import Swal from 'sweetalert2'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-joblisting',
  imports: [HeaderComponent,CommonModule,FormsModule],
  providers:[HomeService],
  templateUrl: './joblisting.component.html',
  styleUrl: './joblisting.component.css'
})
export class JoblistingComponent {
  alljobs: any

  getjob: any

  search: any = ''

  jobtype: any = ''

  totalpage = 0

  currantpage = 0

  limit = 6

  constructor(private homeservices: HomeService) {
    this.getalljob()
  }

  ngOnInit(): void {
    this.getalljob()
  }

  getalljob() {
    let savejob: any = []
    this.homeservices.getalljob().subscribe((data: any) => {
      //save
      if (typeof window !== 'undefined' && localStorage.getItem('savejob') !== null) {
        savejob = JSON.parse(localStorage.getItem('savejob') || '[]')
      }
      data.jobs.map((item: any, i: any) => {
        savejob.map((save: any, index: any) => {
          if (save.id == item.id) {
            data.jobs[i].save = true
          } else if (!data.jobs[i].save) {
            data.jobs[i].save = false
          }
        })
      })

      // pagination and sarch
      this.alljobs = data.jobs.filter((job: any) => {
        if (this.jobtype !== '') {
          return job.title.toLowerCase().includes(this.search.toLowerCase()) && job.job_type == this.jobtype
        } else {
          return job.title.toLowerCase().includes(this.search.toLowerCase())
        }
      })
      this.totalpage = Math.ceil(this.alljobs.length / this.limit)
      this.getjob = this.alljobs.splice(this.currantpage * this.limit, this.limit)
    })
  }

  prevpage() {
    this.currantpage--
    this.getalljob()
  }

  nextpage() {
    this.currantpage++
    this.getalljob()
  }

  savejob(job: any) {
    let data = []
    if (typeof window !== null && localStorage.getItem('savejob') !== null) {
      data = JSON.parse(localStorage.getItem('savejob') || '[]')
    }
    data.push(job)
    localStorage.setItem('savejob', JSON.stringify(data))

    this.getalljob()
    Swal.fire("Saved!", "", "success");
  }

  removejob(job: any) {
    let savejob = JSON.parse(localStorage.getItem('savejob') || '[]')
    let data: any = []
    savejob.filter((item: any) => {
      if (item.id != job.id) {
        data.push(item)
      }
    })
    localStorage.setItem('savejob', JSON.stringify(data))
    if (data.length == 0) {
      localStorage.removeItem('savejob')
    }
    this.getalljob()

    Swal.fire("Deleted!", "", "success");
  }
}
