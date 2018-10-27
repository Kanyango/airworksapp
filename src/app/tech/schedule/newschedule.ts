import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'newschedule-component',
    templateUrl: './newschedule.html'
})

export class NewSchedulesComponent
{
    newSchedForm: FormGroup;
  
  constructor(private fb: FormBuilder)
  {
    this.createForm()
  }
  
  createForm()
  {
      this.newSchedForm = this.fb.group({
        
          status : ['',Validators.required],
          flight : ['',Validators.required],
          leg : ['',Validators.required],
          origin : ['',Validators.required],
          destination : ['',Validators.required],
          ac : ['',Validators.required],
          ac_type : ['',Validators.required],
          ac_series : ['',Validators.required],
          pilot : ['',Validators.required],
          from_schdl_depart : ['',Validators.required],
          to_schdl_depart : ['',Validators.required],
          from_schdl_arrival : ['',Validators.required],
          to_schdl_arrival : ['',Validators.required],
        
      })
  }
  
  onSubmit()
  {
    console.log(this.newSchedForm.value);
  }

}
