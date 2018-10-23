
import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'newkod-component',
  templateUrl: './newkod.html'
})

export class NewWKDComponent {
  closeResult: string;
  taskCardForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) {}

  
}
