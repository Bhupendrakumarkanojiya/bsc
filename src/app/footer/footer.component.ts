import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { PrintMyName } from '../data.service';
import { Data } from '@angular/router';
import { NameofthedirectiveDirective } from '../nameofthedirective.directive';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  viewProviders: [PrintMyName]
})

export class FooterComponent implements OnInit {
  users: object;
  public name: string;
  public description: string;
  
  constructor(private data: DataService, private nameService : PrintMyName) {
      this.name = nameService.getName();
   }

   ngOnInit() {
    this.data.getUsers().subscribe(data => this.users = data);
    console.log(this.users);
  }

  myClickFunction(event){
    alert(event);
  }

}


