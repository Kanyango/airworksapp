import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'; 

@Component({
  selector: 'newac-component',
  templateUrl: './newac.html'
})

export class NewAircraftComponent {
  closeResult: string;
  newAcForm:FormGroup; 
  
  constructor(private modalService: NgbModal, private fb: FormBuilder) 
  {
    this.createForm()
  }

  createForm()
  {
    this.newAcForm = this.fb.group(
    {
        status : ['', Validators.required],
        ac : ['', Validators.required],
        sn : ['', Validators.required],
        type : ['', Validators.required],
        series : ['', Validators.required],
        build_date : ['', Validators.required],
        no_of_engines : ['', Validators.required],
        eol_date : ['', Validators.required],
        eol_hrs : ['', Validators.required],
        eol_cycles : ['', Validators.required],
        auth_no : ['', Validators.required],
        amm : ['', Validators.required],
        amp : ['', Validators.required],
        revision : ['', Validators.required],
        date : ['', Validators.required],
         curr_ac_flight_hrs : ['', Validators.required],
        block_hrs : ['', Validators.required],
        ac_cycles : ['', Validators.required],
        rin : ['', Validators.required],
        time_as_of : ['', Validators.required],
        ac_under_warranty : ['', Validators.required],
        tped_comp : ['', Validators.required],
        etops : ['', Validators.required],
        rsvm : ['', Validators.required],
        vendor : ['', Validators.required],
        war_hrs : ['', Validators.required],
        warr_cycles : ['', Validators.required],
        warr_days : ['', Validators.required],
        mnfctr : ['', Validators.required],
        owner : ['', Validators.required],
        operator : ['', Validators.required],
        insurance : ['', Validators.required],
        last_ac_reg : ['', Validators.required],
        expiry_date : ['', Validators.required],
        reg_date : ['', Validators.required],
        own_cert : ['', Validators.required],
        flight_status : ['', Validators.required],
        max_taxi_wei : ['', Validators.required],
        fuel_cap : ['', Validators.required],
        boawi_val : ['', Validators.required],
        freigh_pax_cargo : ['', Validators.required],
        winglet : ['', Validators.required],
        max_land_weight : ['', Validators.required],
        max_to_weight : ['', Validators.required],
        mac_val : ['', Validators.required],
        max_thrust : ['', Validators.required],
        enhancd_cabin : ['', Validators.required],
        max_zero_fuel_weight : ['', Validators.required],
        basic_empty_weight : ['', Validators.required],
        arm_value : ['', Validators.required],
        amo : ['', Validators.required],
        ops_empty_weight : ['', Validators.required],
        total_moment : ['', Validators.required],
        oew_value : ['', Validators.required],
        max_cruis_alt : ['', Validators.required],
        status : ['', Validators.required],
        engine_model: ['',Validators.required],
        delivery_date : ['', Validators.required],
        coa_date : ['', Validators.required],
        date_on_ops : ['', Validators.required],
        first_revenue_date : ['', Validators.required]
    })
  }

  onSubmit()
  {
    console.log(this.newAcForm.value);
  }
  
}
