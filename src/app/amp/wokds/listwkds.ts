import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'listwkds-component',
    templateUrl: './listwkds.html'
})

export class ListWorkOrdersComponent
{

    workords = 
                [
                    {
                        wordno: '700001',
                        status: 'open',
                        operations:[{name: 'Hydraulic System Service'},
                               {name: 'Tail De Icer doesnt Inflate'}
                               ],
                        parts : [
                                  {
                                  pn: '72383-12', 
                                  sn: '7982', 
                                  desc: 'Main Battery', 
                                  rqrd_qty: '1',
                                  iss_qty: '0', 
                                  uom: '0'},
                                  {
                                  pn: '99033-14', 
                                  sn: '8893', 
                                  desc: 'Tail De Icing boots', 
                                  rqrd_qty: '3',
                                  iss_qty: '1', 
                                  uom: '1'}
                                  ],
                        ac: '5Y-67B',
                        acsn: '3889',
                        priority: 'Urgent'
                        
                    }
                
                ];

}