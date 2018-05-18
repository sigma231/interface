import { Injectable } from '@angular/core';
import { Headers, Http, HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bids } from '../models/bids';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  bids: Bids[];
  url: String = "http://localhost:8000/api/";
  constructor(private http: Http) { }

  getAllBids(): Observable<Bids[]> {
    return this.http.get('assets/json/data.json').map(response => {
      console.log(response);
      return <Bids[]>response.json();
        });


  }
  getLiveAuctions(): Observable<Bids[]>{
    return this.http.get('assets/json/data2.json').map(response => {
      console.log(response);
      return <Bids[]>response.json();
    })

  }

}
