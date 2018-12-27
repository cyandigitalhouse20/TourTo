import { Injectable } from '@angular/core';
import { RepositoryService } from '..';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private repositoryService: RepositoryService) {

  }

  getMenu(position) {
    return this.repositoryService.get('CMS/Menu?langId=2&menuPosition=' + position + '&parentId=0');
  }
}
