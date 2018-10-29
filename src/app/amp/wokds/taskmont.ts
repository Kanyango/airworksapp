
import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,FormBuilder, Validators, FormArray } from '@angular/forms'; 

@Component({
  selector: 'taskmont-component',
  templateUrl: './taskmont.html'
})
export class WOTaskMontComponent {
  
  closeResult: string;
  woTaskForm:FormGroup; 
  
  tasks = [{name: "Task 1"}, {name: "Task 2"}]

  constructor(private modalService: NgbModal)
  {
    this.creatForm()
  }
  
  creatForm()
  {
    this.woTaskForm = this.fb.group(
      {  
 
        ac: ['', Validators.required],
        wo_no: ['', Validators.required],
        tc_no: ['', Validators.required],
        pn: ['', Validators.required],
        pn_sn: ['', Validators.required],
        rev: ['', Validators.required],
        cat: ['', Validators.required],
        type: ['', Validators.required],
        desc: ['', Validators.required],
        status: ['', Validators.required],
        priority: ['', Validators.required],
        inspctd: ['', Validators.required],
        RII: ['', Validators.required],
        desc_work: ['', Validators.required],
        schd_start_date: ['', Validators.required],
        schd_end_date: ['', Validators.required],
        hist_desc: ['', Validators.required]
        
      })
  }
  
  open(content) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
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
