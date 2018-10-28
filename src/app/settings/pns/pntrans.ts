import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,FormBuilder, Validators, FormArray } from '@angular/forms'; 

@Component({
    selector: 'pntrans-component',
    templateUrl: './pntrans.html'
})

export class PNTransComponent
{
   pnTransForm: FormGroup;
  
  constructor(private fb: FormBuilder)
  {
      this.createForm()
  }
  
  createForm()
  {
     this.pnTransForm = this.fb.group(
      {  
        wo : [''],
        inv_loc: ['', Validators.required],
        task_card: ['', Validators.required],
        req_by: ['', Validators.required],
        priority: ['', Validators.required],
        deli_loc: [''],
        deli_site: [''],
        pns  : this.fb.array([])
        
      })
  
    }
  
  onSubmit()
  {
    console.log(this.pnTransForm.value);
  }
  
}
