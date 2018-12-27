import { Injectable } from '@angular/core';
import { RepositoryService } from '..';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguageId: number;
  currentLanguageNativeName: string;

  constructor(private repositoryService: RepositoryService) {

  }
  getDefaultLanguage() {
    return this.repositoryService.get('CMS/languages/Default');
  }

  getLanguages() {
    return this.repositoryService.get('CMS/languages');
  }
}
