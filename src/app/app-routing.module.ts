import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash';
import { WorkOrdersComponent } from './amp/wokds/workds';
import { TaskCardsComponent } from './amp/tasks/tasks';
import { AircraftsComponent } from './amp/acs/acs';
import { PartsComponent } from './inventory/parts';
//import { PurcahseOrdersComponent } from './orders/po/po';
//import { NewPurchaseOrdersComponent } from './orders/po/newpo';
//import { RepairOrdersComponent } from './orders/ro/ro';
//import { NewRepairOrderComponent } from './orders/ro/newro';
import { AtaComponent } from './settings/ata/ata';
import { DefectComponent } from './reports/defect';
import { NewPNComponent } from './settings/pns/newpn';
import { ItemRelComponent } from './reliability/item/item';
import { PNRelComponent } from './reliability/pn/pn';
import { PNTransComponent } from './settings/pns/pntrans';
import { RqstnComponent } from './rqstn/rqstn';
import { UsersComponent } from './admin/users';
import { PNsComponent } from './settings/pns/pn';
import { ListWorkOrdersComponent } from './amp/wokds/listwkds';
import { PrintWorkOrdersComponent } from './amp/wokds/print';
import { ACFlightsComponent } from './tech/flights/acflights'
import { NewACLogsComponent } from './tech/flights/newlog';
import { SchedulesComponent } from './tech/schedule/schdule';
import { NewSchedulesComponent } from './tech/schedule/newschedule';
import { ECMComponent } from './tech/ecm/ecm';
import { ADDECMComponent } from './tech/ecm/add';
import { DelayComponent } from './tech/flights/delay';

const routes: Routes = 
        [
            { path: 'dashboard', component: DashComponent },
            { path: 'workorders', component: WorkOrdersComponent },
            { path: 'tasks', component: TaskCardsComponent },
            { path: 'aircrafts', component: AircraftsComponent },
            { path: 'parts', component: PartsComponent },
            //{ path: 'pos', component: PurcahseOrdersComponent },
            //{ path: 'newpo', component: NewPurchaseOrdersComponent },
            //{ path: 'repairo', component: RepairOrdersComponent },
            //{ path: 'newro', component: NewRepairOrderComponent },
            { path: 'ata', component: AtaComponent },
            { path: 'defect', component: DefectComponent },
            { path: 'newpn', component: NewPNComponent },
            { path: 'itemrel', component: ItemRelComponent },
            { path: 'pnrel', component: PNRelComponent },
            { path: 'pntrans', component: PNTransComponent },
            { path: 'rqstn', component: RqstnComponent },
            { path: 'users', component: UsersComponent },
            { path: 'pns', component: PNsComponent },
            { path: 'listwkds', component: ListWorkOrdersComponent },
            { path: 'printwkds', component: PrintWorkOrdersComponent },
            { path: 'flights', component: ACFlightsComponent },
            { path: 'newaclog', component: NewACLogsComponent },
            { path: 'schedules', component: SchedulesComponent },
            { path: 'newschedules', component: NewSchedulesComponent },
            { path: 'acecm', component: ECMComponent },
            { path: 'addecm', component: ADDECMComponent },
            { path: 'delay', component: DelayComponent }
        ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}