import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor( private http: HttpClient) { }

  getRepositories(){
    
    const username = `Arisodee`;
    return this.http.get('https://api.github.com/users/${username}/repos');
    let url = environment.API_URL + username + '/repos' + '?access_token=' + environment.API_KEY;
    let promise = new Promise((resolve, reject) => {
      // this.http.get<APIResponse>(url).toPromise().then(response => {
      
        resolve()
      }
  },
} 