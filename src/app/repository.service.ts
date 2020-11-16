import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor( private http: HttpClient) { }

  getRepositories(){
    
    const username = `Arisodee`;
    return this.http.get('https://api.github.com/users/${username}/repos');
  }
}
