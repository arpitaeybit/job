import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { HeaderComponent } from '../layout/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save',
  imports: [CommonModule,HeaderComponent],
  templateUrl: './save.component.html',
  styleUrl: './save.component.css'
})
export class SaveComponent {
  savedata:any
  constructor(){
    this.getsavejob()
  }
  
  getsavejob(){
    if(typeof window !== 'undefined'){
      this.savedata = JSON.parse(localStorage.getItem('savejob') || '[]')
    }    
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
      this.getsavejob()
  
      Swal.fire("Deleted!", "", "success");
    }
}
