import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'; 
import { FormGroup,FormControl,FormBuilder, Validators, FormArray } from '@angular/forms'; 
import { TaskItems } from '../services/models';
]
  @Component({
  selector: 'newtask-component',
  templateUrl: './newtask.html' 
})

export class NewTaskComponent {
  closeResult: string;
  taskCardForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) 
  {
     this.createForm()
  }
  
  createForm()
  {
     this.taskCardForm = this.fb.group(
      {  
        card_no : [''],
        type: ['', Validators.required],
        category: ['', Validators.required],
        mpd: ['', Validators.required],
        area: ['', Validators.required],
        weight_bal: [''],
        status: [''],
        revision: ['', Validators.required],
        prioriy: ['', Validators.required],
        mel_cdl: ['', Validators.required],
        grnd_time: ['', Validators.required],
        chap: ['', Validators.required],
        sec: ['', Validators.required],
        par: ['', Validators.required],
        mechanic: ['', Validators.required],
        elec_load_charge: ['', Validators.required],
        mod_no: ['', Validators.required],
        wo_status: ['', Validators.required],
        repair_alt: ['', Validators.required],
        auth_by: ['', Validators.required],
        auth_date: ['', Validators.required],
        hyd_power: ['', Validators.required],
        elec_power: ['', Validators.required],
        flaps_pos: ['', Validators.required],
        spoilers: ['', Validators.required],
        slats: ['', Validators.required],
        fuel_tanks: ['', Validators.required],
        mechanic: ['', Validators.required],
        corr: ['', Validators.required],
        allow_defer: ['', Validators.required],
        zonal: [''],
        mand_class: [''],
        rsvm: [''],
        rii: [''],
        ac_jack: [''],
        etops: [''],
        ir: [''],
        pneu_power: [''],
        critical_task: [''],
        ectm: [''],
        cdccl: [''],
        func_task: [''],
        leck_chk: [''],
        indp_task: [''],
        
        items : this.fb.array([])
        
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
