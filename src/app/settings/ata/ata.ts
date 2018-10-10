import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'ata-component',
    templateUrl: './ata.html'
})

export class AtaComponent
{

    atas = [ {chap: '21', chap_title: 'Air Conditioning', 
              sects: [ 
                        {sec: '00', sec_title:'General' },
                        {sec: '10', sec_title:'Compression'},
                        {sec: '20', sec_title:'Distribution'},
                        {sec: '30', sec_title:'Pressurization Control' },
                        {sec: '40', sec_title:'Heating' },
                        {sec: '50', sec_title:'Cooling' },
                        {sec: '60', sec_title:'Temperature Control' },
                        {sec: '00', sec_title:'Moisture/ Air Containment Control' }
                     ]
                }
            ]
}