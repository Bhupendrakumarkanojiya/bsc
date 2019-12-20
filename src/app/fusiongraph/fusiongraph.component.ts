import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as FusionCharts from 'fusioncharts';



const dataUrl =
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json';
const schemaUrl =
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json';

@Component({
  selector: 'app-fusiongraph',
  templateUrl: './fusiongraph.component.html',
  styleUrls: ['./fusiongraph.component.scss']
})
export class FusiongraphComponent implements OnInit {
  dataSource: Object;
  title: string;
  currentWeather: Object;

  constructor(private data: DataService) {
    
    this.title = 'Weather Information';

    this.dataSource = {
      chart: {
        caption: 'Bangalore Tempreature ['+ Date() +']',
        //subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Time',
        yAxisName: 'Tempreature (*C)',
        numberSuffix: '*C',
        theme: 'fusion'
      },
      data: [
        { label: '6 AM', value: '14' },
        { label: '8 AM', value: '16' },
        { label: '10 AM', value: '18' },
        { label: '12 PM', value: '20' },
        { label: '2 PM', value: '21' },
        { label: '4 PM', value: '19' },
        { label: '6 PM', value: '18' },
        { label: '8 PM', value: '16' },
        { label: '10 PM', value: '14' },
        { label: '12 AM', value: '12' }
      ]
    };
  }

  ngOnInit() {
    // this.currentWeather = this.data.getCurrentWeather().subscribe(data => this.currentWeather = data);
    // console.log("calling this initiating");
    // console.log(this.currentWeather);

    this.data.getCurrentWeather().subscribe((value:any) => {
       this.currentWeather = value;
       console.log(value.weather.id);
       
     });
     console.log('test it');
     console.log(this.currentWeather);
  
    
  }

}
