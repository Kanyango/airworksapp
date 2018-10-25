
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'newpo-component',
    templateUrl: './newpo.html'
})

export class NewPOComponent
{
    acs = [
            {
                ac_reg : '5Y-JWD',
                model  : 'Bombardier DHC-8-200',
                serial_no : '447'
            },
            {
                ac_reg : '5Y-ASA',
                model  : 'Cessna 208 B',
                serial_no : '337'
            }
           ]
}
