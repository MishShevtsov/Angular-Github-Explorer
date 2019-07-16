import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../git-hub.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})

export class UsersDashboardComponent implements OnInit {
  public usersList: any;
  public queryResalt: any;
  constructor(private service: GitHubService) {}

  searchQuery(query:string){
    console.log(query);
    if(query.length > 3) {
      this.service.getUserByName(query).subscribe(res => {
        this.queryResalt = res;
        console.log(res);
        this.usersList = res['items'];
      });

      this.service.getUsersBySeach(1).subscribe(res => {
        this.queryResalt = res;
        console.log(res);
        this.usersList = res['items'];
      })
    }
  }

  ngOnInit() {
    this.service.getAllUsers().subscribe(res => {
      this.usersList = res;
      console.log(res);
    });  
  }

}
