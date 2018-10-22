
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mels-component',
    templateUrl: './mel.html'
})

export class MELsComponent
{
    mel = [
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
