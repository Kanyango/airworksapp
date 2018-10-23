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
import { LoginComponent } from './login/login';
import { DashInventoryComponent } from './inventory/dash/dash';
import { ACStatusComponent } from './reports/acstatus';
import { MELsComponent } from './mel/mel';
import { RoutesComponent } from './routes/routes';
//import { NewRouteComponent } from './routes/newroute';
import { EmpsComponent } from './emps/emps';
import { ToolsComponent } from './tools/tools';
import { NewTaskComponent } from './amp/tasks/newtask';
import { NewWKDComponent } from './amp/wokds/newkod';

const routes: Routes = 
        [
            { path: '', component: LoginComponent },
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
            { path: 'delay', component: DelayComponent },
            { path: 'invdash', component: DashInventoryComponent },
            { path: 'acstatus', component: ACStatusComponent },
            { path: 'mels', component: MELsComponent },
            { path: 'routes', component: RoutesComponent },
            { path: 'emps', component: EmpsComponent },
          { path: 'tools', component: ToolsComponent },
           { path: 'newtaskcard', component: NewTaskComponent },
          { path: 'neworkorder', component: NewWKDComponent }
        ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
