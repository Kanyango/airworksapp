import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'tasks-component',
    templateUrl: './tasks.html'
})

export class TaskCardsComponent
{
    tasks = [
                {
                    task_no: '2750/02',
                    desc   : 'FLAP PRIMARY TORQUE SHAFT SPLINES',
                    action : 'LUBE',
                    every  : '10000',
                    period : 'CYCLES',
                    last   : '38505',
                    next   : '48505',
                    togo   : '9314',
                    ac     : '5Y-JWD',
                    sn     : '447'
                },
                {
                    task_no: '2750/18',
                    desc   : 'FLAP BALLSCREW ACTUACTORS BACKLASH CHK',
                    action : 'FUNC',
                    every  : '3000',
                    period : 'CYCLES',
                    last   : '38505',
                    next   : '48505',
                    togo   : '9314',
                    ac     : '5Y-JWD',
                    sn     : '447'
                }
            ]

}