import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'dashinv-component',
    templateUrl: './dash.html'
})

export class DashInventoryComponent
{
    id = '';
    constructor(private route: ActivatedRoute){}
    
    /*ngOnInit()
     {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log('iam',this.id);
     }*/

}
