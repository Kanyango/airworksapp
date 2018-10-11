import { Component, OnInit , AfterViewInit, ElementRef} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
    selector: 'login-component',
    templateUrl: './login.html'
})

export class LoginComponent 
{
  
    constructor(private fb: FormBuilder, 
                private element: ElementRef,
                private route: ActivatedRoute,
                private router: Router){}
    login()
    {
      this.router.navigate(['/aircrafts']);
    }
   
  
}
