import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MenuService } from 'src/app/_services';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.css']
})
export class MenuLinksComponent implements OnInit {

  pages: any[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu(1).subscribe((data: any) => {
      this.pages = data;
    }, (err: HttpErrorResponse) => {
      console.log(err.error.Message);
    });
  }
  highlightPage(item) {
    this.pages.forEach(element => {
      element.IsSelected = false
    });
    item.IsSelected = true;
  }
}
