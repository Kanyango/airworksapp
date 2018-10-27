import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'newlog-component',
    templateUrl: './newlog.html'
})

export class NewACLogsComponent
{
  
  flightLogForm: FormGroup;
  
  constructor(private fb: FormBuilder)
  {
    this.createForm()
  }
  
  
  createForm()
  {
    this.flightLogForm = this.fb.group(
      {
        ac : ['',Validators.required],
        log : ['',Validators.required],
        leg : ['',Validators.required],
        date : ['',Validators.required],
        off : ['',Validators.required],
        to : ['',Validators.required],
        lng : ['',Validators.required],
        on : ['',Validators.required],
        cycles : ['',Validators.required],
        pilot : ['',Validators.required],
        origin : ['',Validators.required],
        destination : ['',Validators.required],
        flight : ['',Validators.required],
        fuel_burned : ['',Validators.required],
        block : ['',Validators.required],
        cat_rating : ['',Validators.required],
        etops : ['',Validators.required],
        flight_hrs : ['',Validators.required]
      })
  }
  
  onSubmit()
  {
    console.log(this.flightLogForm.value);
  }
}
