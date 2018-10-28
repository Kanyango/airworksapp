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
        
        pn : ['',Validators.required],
        sn: ['', Validators.required],
        position : ['', Validators.required],
        type : ['', Validators.required],
        defect_type: ['', Validators.required],
        defect: ['', Validators.required],
        item : ['' , Validators.required],
        wo : ['' , Validators.required],
        tc : ['' , Validators.required],
        tcpn : ['' , Validators.required],
        transaction : ['' , Validators.required],
        ac : ['' , Validators.required],
        date : ['' , Validators.required],
        station : ['' , Validators.required],
        
      })
  
    }
  
  onSubmit()
  {
    console.log(this.pnTransForm.value);
  }
  
}
