import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-commentmodal',
  templateUrl: './commentmodal.component.html',
  styleUrls: ['./commentmodal.component.css']
})
export class CommentmodalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeTheModal() {
    this.activeModal.dismiss();
  }

}
