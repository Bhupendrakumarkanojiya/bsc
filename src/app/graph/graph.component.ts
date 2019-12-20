import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Chart } from 'chart.js';
import { Data } from './data';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor(private http:HttpClient) {  }
  title='app';
  data : Data[];
  url = 'http://localhost:4000/results';
  month=[];
  price=[];
  chart=[];
  
  ngOnInit() {
    this.http.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.price,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
  

}
