import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Footer } from 'src/app/_models';
import { MenuService } from 'src/app/_services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  model: Footer[] = [];

  constructor(public menuService: MenuService) {

  }

  ngOnInit() {
    this.menuService.getMenu(2).subscribe((data: any) => {
      let footer: Footer;
      let pages: any[];
      pages = data;
      
      for (let index = 0; index < pages.length; index++) {
        if (index == 0) {
          footer = new Footer();
          footer.Items = new Array();
        }
        footer.Items.push(pages[index]);

        if (index == 2 || pages.length == index + 1) {
          this.model.push(footer);
          pages.splice(0, 3);
          index = -1;
        }
      }
    }, (err: HttpErrorResponse) => {
      console.log(err.error.Message);
    });
  }

  highlightPage(item) {
    this.model.forEach(element => {
      element.Items.forEach(elementItem =>{
        elementItem.IsSelected = false
      })
    });
    item.IsSelected = true;
  }
}
