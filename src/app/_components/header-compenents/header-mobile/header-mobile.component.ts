import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LanguageService } from 'src/app/_services';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {
  isCollapsed = true;
  languages: any[];
  constructor(public languageService: LanguageService) { }

  ngOnInit() {

    this.languageService.getLanguages().subscribe((data: any) => {
      this.languages = data;
    }, (err: HttpErrorResponse) => {
      console.log(err.error.Message);
    });

  }

  setLanguage(item) {
    this.languageService.currentLanguageId = item.Id;
    this.languageService.currentLanguageNativeName = item.NativeName;
  }

}
