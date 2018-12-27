import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-hotels-result',
  templateUrl: './hotels-result.component.html',
  styleUrls: ['./hotels-result.component.css']
})
export class HotelsResultComponent implements OnInit {
  rate: number = 3;
  isReadonly: boolean = true;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
