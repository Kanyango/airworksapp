import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ecm-component',
    templateUrl: './ecm.html'
})

export class ECMComponent
{
    ecms = [{ ac: '15171', flight_log: 'Z', flight_date: '09/02/2018' },
            { ac: 'N303TX', flight_log: 'Z', flight_date: '08/03/2018' },
            { ac: '7043', flight_log: 'Z', flight_date: '10/03/2018' },
            { ac: '7044', flight_log: 'Z', flight_date: '11/04/2018' }
            ]
    
}