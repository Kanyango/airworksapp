import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'return-component',
  templateUrl: './return.html'
})

export class ReturnComponent {
  closeResult: string;
  returnForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) 
  {
    this.createForm()
  }

  createForm()
  {
    this.returnForm = this.fb.group(
    {
        form_no: [''],
        part_no: [''],
        serial_no : [''],
        name: [''],
        desc: [''],
        qtty: [''],
        work_no: [''],
        rtnd_by: [''],
        apprvd: [''],
        reason: [''],
        accept: [''],
        details: ['']
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