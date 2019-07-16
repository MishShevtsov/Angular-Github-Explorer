import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  public appiUrl: string = 'https://api.github.com/';
  public usersNumber: number = 20;
  public userName: string = 'WTF';
  public userLogin: string = "mojombo";
  public searchQuery: string;
  constructor(private http: HttpClient) { }

  getAllUsers () {
    return this.http.get(`${this.appiUrl}users?per_page=${this.usersNumber}`);
  }

  getUserByName (login: string) {
    this.searchQuery = login;
    return this.http.get(`${this.appiUrl}search/users?q=${login}`)
  }

  getUserByLogin (login: string) {
    return this.http.get(`${this.appiUrl}users/${login}`)
  }

  getUserRepos (login: string) {
    return this.http.get(`${this.appiUrl}users/${login}/repos`)
  }

  getUsersBySeach (pageId: any) {
    return this.http.get(`${this.appiUrl}search/users?q=${this.searchQuery}&page=${pageId}&per_page=${this.usersNumber}`)
  }

  // ${this.apiUrl}search/users?q=${userName}
  // https://api.github.com/users?per_page=100
  // ${this.apiUrl}users?per_page=${this.usersQuantity}
  // ${this.apiUrl}users/${login}
  // ${this.apiUrl}users/${login}/repos
  // ${this.apiUrl}search/users?q=${this.searchQuery}&page=${pageId}&per_page=${this.usersQuantity}
  // https://api.github.com/search/users?q=mishanya&page=2&per_page=20 
}
