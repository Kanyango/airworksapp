import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'parts-component',
    templateUrl: './parts.html'
})

export class PartsComponent
{
    parts = 
           [
            {pn: '2622304-3', sn: 'N/A', desc: 'BRACKET', location: 'c-2-3',
            cure_date: '', expiry_date: '', min_qty: '', restock_qty: '',
            units_in_stock: 1, last_used: '', last_ordrd: '', mnfctrer: '',
            supplier: '', batch_no: '', note: ''},
            
            {pn: '3009022', sn: 'N/A', desc: 'WASHER', location: 'c-2-3',
            cure_date: '', expiry_date: '', min_qty: '', restock_qty: '',
            units_in_stock: 1, last_used: '', last_ordrd: '', mnfctrer: '',
            supplier: '', batch_no: '', note: ''},
            
            {pn: '066-1072-00', sn: 'N/A', desc: 'ADF CONTROLLER', location: 'S-R',
            cure_date: '', expiry_date: '', min_qty: '', restock_qty: '',
            units_in_stock: 1, last_used: '', last_ordrd: '', mnfctrer: '',
            supplier: '', batch_no: '', note: ''},
            
            {pn: '2606015-2RX', sn: 'N/A', desc: 'OIL TEMP PRESS GAUGE', location: 'S-R',
            cure_date: '', expiry_date: '', min_qty: '', restock_qty: '',
            units_in_stock: 5, last_used: '', last_ordrd: '', mnfctrer: '',
            supplier: '', batch_no: '', note: ''}
           
           ]

}