import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'atarel-component',
  templateUrl: './atarel.html'
})

export class AtarelComponent {
  closeResult: string;
  alertATAForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) 
  {
    this.createForm()
  }

  createForm()
  {
    this.alertATAForm = this.fb.group(
    {
        alert_level1 : [''],
        alert_level2 : [''],
        alert_level3 : [''],
        
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