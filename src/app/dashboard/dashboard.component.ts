import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [AppService]
  
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
