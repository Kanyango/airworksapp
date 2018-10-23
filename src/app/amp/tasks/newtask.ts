import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'newtask-component',
  templateUrl: './newtask.html'
})

export class NewTaskComponent {
  closeResult: string;
  taskCardForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) {}

  
}
