import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit, OnChanges{
@Input() data:any = {};


ngOnInit(){
}

  ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  }

}
