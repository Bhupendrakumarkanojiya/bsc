import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wifiRequest(){
    alert("Request submitted successfully");
    
  }

}
