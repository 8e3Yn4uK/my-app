import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  message: string ;

  items = ["Angular", "React", "NodeJS", "Vue", "Bootstrap"];

  loggedIn = true;

  constructor() {
    setInterval(() => {
      this.message = new Date().toLocaleTimeString();
    }, 1000)
  }

  ngOnInit() {
  }

}
