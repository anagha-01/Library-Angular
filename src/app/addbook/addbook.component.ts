import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {ApiService} from '../api.service'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  onSubmit(data:NgForm){
    console.log(data.value)
    this.apiservice.insertData(data.value).subscribe((response)=>{
      console.log(response)
      alert('Successfully Inserted')
    })
  }
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

}
