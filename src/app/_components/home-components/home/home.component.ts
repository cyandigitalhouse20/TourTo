import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LanguageService } from 'src/app/_services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showHotels: boolean;
  showFlights: boolean;
  constructor(public languageService: LanguageService,public translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.showFlights = true;

    if (this.languageService.currentLanguageId == null) {

      this.languageService.getDefaultLanguage().subscribe((data: any) => {
        this.languageService.currentLanguageId = data.Id;
        this.languageService.currentLanguageNativeName = data.NativeName;
      }, (err: HttpErrorResponse) => {
        console.log(err.error.Message);
      });
      
    }
  }

  show(type) {
    if (type == 'Flights') {
      this.showFlights = true;
      this.showHotels = false;
    }
    else if (type == 'Hotels') {
      this.showFlights = false;
      this.showHotels = true;
    }
  }

}
