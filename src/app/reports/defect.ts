import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'defect-component',
    templateUrl: './defect.html'
})

export class DefectComponent
{
   flights = [{ac: '0810', 
                flight_log: '2L', 
                leg: '1', 
                flight_date: '12/05/2018',
                of: '10:00',
                to: '10:00',
                lng: '13:00',
                on: '13:00',
                cycles: '1',
                origin: 'ACK',
                destination: 'MIA',
                flight: '3',
                block: '3',
                cat_rating:'CAT'
                }]
}
