import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FtpTest';
  data: any
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getDataEntries().subscribe(x=> {this.data =x})
  }

}
