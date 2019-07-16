import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../git-hub.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userDate = {};
  public repos: any = [];
  constructor(private route: ActivatedRoute, private service: GitHubService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.getUserByLogin(id).subscribe(res => {
      console.log(res);
      this.userDate = res;
    });

    this.service.getUserRepos(id).subscribe(res => {
      this.repos = res;
      console.log(res);
    })
  }


}
