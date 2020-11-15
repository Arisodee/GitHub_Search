import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { HttpClient } from '@angular/common/http';
import { ProfileService  } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile : Profile;

  constructor(profileService:ProfileService, private http : HttpClient) {
    
  }

  ngOnInit() {

  }
}