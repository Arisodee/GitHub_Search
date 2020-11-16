import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositoryService  } from '../repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repository: Repository;

  gitHubRepos: any = [];
  constructor(private repoService : RepositoryService) { 
    this.getRepo();
  }

  getRepo(){
    this.repoService.getRepositories().subscribe(repos =>{
      this.gitHubRepos = repos;
    })
  }

  ngOnInit(): void {
  }

}
