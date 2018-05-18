import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Bids } from '../../models/bids';

@Component({
  selector: 'app-liveauctions',
  templateUrl: './liveauctions.component.html',
  styleUrls: ['./liveauctions.component.css']
})
export class LiveauctionsComponent implements OnInit {
  bids: Bids[];

  constructor(private user: UserService) { }

  ngOnInit() {
    this.getLiveAuctions();
  }
  getLiveAuctions() {
    this.user.getLiveAuctions().subscribe(response => {
      this.bids = response;
      console.log(response);
    }

    );

  }

}
