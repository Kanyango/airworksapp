
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,FormBuilder, Validators, FormArray } from '@angular/forms'; 
import { PNs } from '../../services/models';


@Component({
    selector: 'picklist-component',
    templateUrl: './picklist.html'
})

export class PickListComponent 
{
  
  newPckListForm: FormGroup;
  
  constructor(private fb: FormBuilder)
  {
      this.createForm()
  }
  
  createForm()
  {
     this.newPckListForm = this.fb.group(
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
  

  get pns(): FormArray {
    return this.newPckListForm.get('pns') as FormArray;
  };

  setAlerts(pns: PNs[]) {
    const pnsFGs = pns.map(pn => this.fb.group(pn));
    const pnsFormArray = this.fb.array(pnsFGs);
    this.newPckListForm.setControl('pns', pnsFormArray);
  }

  addPn() {
    this.pns.push(this.fb.group(new PNs()));
  }
  
  onSubmit()
  {
    console.log(this.newPckListForm.value);
  }

  

}
