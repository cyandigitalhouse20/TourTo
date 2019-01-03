import { Injectable } from '@angular/core';
import { RepositoryService } from '..';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor(private repositoryService: RepositoryService) {
  }

  searchCity(term: string) {
    return this.repositoryService.get("StaticData/Cities/2/null/0/0/" + term + "/null/true?searchableOn=air");

  }
}
