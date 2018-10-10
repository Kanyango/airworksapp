import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'issue-component',
  templateUrl: './issue.html'
})

export class IssueComponent {
  closeResult: string;
  issueForm:FormGroup;
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) 
  {
    this.createForm()
  }

  createForm()
  {
    this.issueForm = this.fb.group(
    {
        form_no: [''],
        issue_store: [''],
        job_no: [''],
        location: [''],
        comments: [''],
        receiving: [''],
        delivery: [''],
        customer: ['']
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