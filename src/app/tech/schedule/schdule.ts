import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'schdule-component',
    templateUrl: './schdule.html'
})

export class SchedulesComponent
{

    schedules = [{ac: '5Y-IKJ', flight: 'X1', leg: '1', schedule: '08/09/2018',
                  sch_time: '10:00',
                  arrival: '08/09/2018', arr_time: '11:45'},
                  
                  {ac: '5Y-JWD', flight: 'ZFLIGHT', leg: '1', schedule: '08/09/2018',
                  sch_time: '10:00',
                  arrival: '08/09/2018', arr_time: '11:45'}];

}
