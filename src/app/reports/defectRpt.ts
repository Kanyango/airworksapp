
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'newdefectrpt-component',
    templateUrl: './defectRpt.html'
})

export class NewDefectRPTComponent
{
    defectRptForm: FormGroup;
  
  constructor(private fb: FormBuilder)
  {
    this.createForm()
  }
  
  createForm()
  {
      this.defectRptForm = this.fb.group({
        
          defect_type : ['',Validators.required],
          defect : ['',Validators.required],
          item : ['',Validators.required],
          ac : ['',Validators.required],
          chap : ['',Validators.required],
          sec : ['',Validators.required],
          par : ['',Validators.required],
          asc : ['',Validators.required],
          flight : ['',Validators.required],
          gate : ['',Validators.required],
          position : ['',Validators.required],
          status : ['',Validators.required],
          defect_cat : ['',Validators.required],
          rqstd_by : ['',Validators.required],
          rptd_date : ['',Validators.required],
          station : ['',Validators.required],
          auth : ['',Validators.required],
          defect_desc : ['',Validators.required],
          est_tat : ['',Validators.required],
          grnd_time_rqrd : ['',Validators.required],
          task_card : ['',Validators.required],
          defer : ['',Validators.required],
          defer_cat : ['',Validators.required],
          defer_by : ['',Validators.required],
          defer_date : ['',Validators.required],
          mel : ['',Validators.required],
          cdl : ['',Validators.required],
          gmm : ['',Validators.required],
          defer_wo : ['',Validators.required],
        
      })
  }
  
  onSubmit()
  {
    console.log(this.defectRptForm.value);
  }

}
