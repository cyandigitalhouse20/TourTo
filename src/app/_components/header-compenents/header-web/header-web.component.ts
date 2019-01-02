import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/_services';
import { HttpErrorResponse } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header-web',
  templateUrl: './header-web.component.html',
  styleUrls: ['./header-web.component.css']
})

export class HeaderWebComponent implements OnInit {

  isCollapsed = true;
  languages: any[];

  constructor(private languageService: LanguageService,public translate: TranslateService) {
    // translate.addLangs(['en', 'fr']);
     translate.setDefaultLang('en');
  
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }

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
