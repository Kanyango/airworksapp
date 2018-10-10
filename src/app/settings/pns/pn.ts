import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'pns-component',
    templateUrl: './pn.html'
})

export class PNsComponent
{
    pns = [    {active: 'true', 
                pn: '2622304-3',
                desc: 'BRACKET', 
                chap: '21', 
                sec:'30',
                uom: 'EA',
                rel: { recur_type: 'Days', 
                       no_rem: '10', 
                       no_days: '30'
                       }
                } ]

}