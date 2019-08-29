import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  onSubmit(data:NgForm){
    console.log(data.value)
  }
  constructor() { }

  ngOnInit() {
  }

}
