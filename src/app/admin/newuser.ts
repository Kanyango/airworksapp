import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'newuser-component',
  templateUrl: './newuser.html'
})

export class NewUserComponent {
  closeResult: string;
  taskCardForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) 
  {
    this.createForm()
  }

  createForm()
  {
    this.taskCardForm = this.fb.group(
    {
        task_no: [''],
        description: [''],
        part_no  : [''],
        serial_no: [''],
        action: [''],
        period: ['']
    })
  }
  open(content) {
    this.modalService.open(content, {size: 'lg'})
    .result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}