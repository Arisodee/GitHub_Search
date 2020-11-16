import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


 profile: Profile;

  constructor( private http: HttpClient) {
    
   }

}
