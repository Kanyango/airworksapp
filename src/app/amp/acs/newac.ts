import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'newac-component',
  templateUrl: './newac.html'
})

export class NewAircraftComponent {
  closeResult: string;
  newAcForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) 
  {
    this.createForm()
  }

  createForm()
  {
    this.newAcForm = this.fb.group(
    {
        ac_reg: [''],
        serial_no: [''],
        model: [''],
        build_date: ['']
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