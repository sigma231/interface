import { Component, OnInit } from '@angular/core';
import { Bids } from '../../models/bids';
import { UserService } from '../../services/user.service';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  bids: Bids[];

  constructor(private user: UserService) { }

  ngOnInit() {
    this.getAllBids();
  }
  getAllBids() {
    this.user.getAllBids().subscribe(response => {
      console.log(response);
      this.bids = response;
    }

    );
  }

}
