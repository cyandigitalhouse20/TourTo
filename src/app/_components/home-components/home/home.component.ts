import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LanguageService } from 'src/app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private languageService: LanguageService) {

  }

  ngOnInit() {
    if (this.languageService.currentLanguageId == null) {

      this.languageService.getDefaultLanguage().subscribe((data: any) => {
        this.languageService.currentLanguageId = data.Id;
        this.languageService.currentLanguageNativeName = data.NativeName;
      }, (err: HttpErrorResponse) => {
        console.log(err.error.Message);
      });
      
    }
  }
}
