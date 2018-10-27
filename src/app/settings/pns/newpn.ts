import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alerts } from '../services/models';
 
@Component({
    selector: 'newpn-component',
    templateUrl: './newpn.html'
})

export class NewPNComponent
{
  newPnForm: FormGroup;
  
  constructor(private fb: FormBuilder)
  {
      this.createForm()
  }
  
  createForm()
  {
    this.newPnForm = this.fb.group(
      {
        active : ['',Validators.required],
        pn : ['',Validators.required],
        pn_desc : ['',Validators.required],
        category : ['',Validators.required],
        sub_category : ['',Validators.required],
        manufacturer : ['',Validators.required],
        chapter : ['',Validators.required],
        sec : ['',Validators.required],
        par : ['',Validators.required],
        uom : ['',Validators.required],
        engine : ['',Validators.required],
        apu : ['',Validators.required],
        rel_mont : ['',Validators.required],
        no_remvs : ['',Validators.required],
        no_days : ['',Validators.required],
        rec_type : ['',Validators.required],
        alerts  : this.fb.array([]),
        ipc : ['',Validators.required],
        non_rep_part : ['',Validators.required],
        shelf_life : ['',Validators.required],
        unlim_shelf_life : ['', Validators.required],
        static_sens_part : ['',Validators.required],
        avi_part : ['',Validators.required],
        maint_ctrl : ['',Validators.required],
        cat_rating : ['',Validators.required],
        apu_hrs_fact : ['',Validators.required],
        apu_cycl_fact : ['',Validators.required],
        apu_read : ['',Validators.required],
        tped : ['',Validators.required],
        etops : ['',Validators.required],
        rsvm : ['',Validators.required],
        apu : ['',Validators.required],
        engine : ['',Validators.required],
        lng : ['',Validators.required],
        disk_radio : ['',Validators.required],
        rec_radio_btn : ['',Validators.required],
        ac_type_ser : ['',Validators.required],
        hrs_factor : ['',Validators.required],
        cycles_factor : ['',Validators.required]
      })
  }
  
  get alerts(): FormArray {
    return this.newPnForm.get('alerts') as FormArray;
  };

  setAlerts(alerts: Alerts[]) {
    const alertsFGs = alerts.map(alert => this.fb.group(alert));
    const alertsFormArray = this.fb.array(alertsFGs);
    this.newPnForm.setControl('alerts', alertsFormArray);
  }

  addAlert() {
    this.alerts.push(this.fb.group(new Alert()));
  }
  
  onSubmit()
  {
    console.log(this.newPnForm.value);
  }
  
}
