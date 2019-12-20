import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  details : object;
  constructor(private data: DataService) { }
  
  // ngOnInit() {
  //   this.data.getUsers().subscribe(data => this.details = data);
  // }

  ngOnInit() {
    this.data.getUsers().subscribe(data => this.details = data);
  }

}
