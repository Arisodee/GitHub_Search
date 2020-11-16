import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


 user: User;

  constructor( private http: HttpClient) {
    
   }

}
