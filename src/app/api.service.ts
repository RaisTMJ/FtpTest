import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public  getDataEntries(){
    return this.http.get("https://api.publicapis.org/entries");
  }
}
