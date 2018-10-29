
import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,FormBuilder, Validators, FormArray } from '@angular/forms'; 

@Component({
  selector: 'newkod-component',
  templateUrl: './newkod.html'
})

export class NewWKDComponent {
  closeResult: string;
  
  newWokdForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) 
  {
    this.createForm()
  }
  
  createForm()
  {
     this.newWokdForm = this.fb.group(
      {  
 
        status: ['', Validators.required],
        category: ['', Validators.required],
        location: ['', Validators.required],
        site: ['', Validators.required],
        priority: ['', Validators.required],
        ac: ['', Validators.required],
        sn: ['', Validators.required],
        tat: ['', Validators.required],
        tat_date: ['', Validators.required],
        ssd: ['', Validators.required],
        sse: ['', Validators.required],
        ass: ['', Validators.required],
        ase: ['', Validators.required],
        description: ['', Validators.required],
        compltd_by: ['', Validators.required],
        closd_by: ['', Validators.required],
        auth_by: ['', Validators.required],
        auth_date: ['', Validators.required],
        
      })
  
    }

  
}
