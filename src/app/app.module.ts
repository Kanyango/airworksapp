import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule }   from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { SuiModule } from 'ng2-semantic-ui';

import { NavbarComponent } from './navbar/nav';
import { DashComponent } from './dash/dash';
import { WorkOrdersComponent } from './amp/wokds/workds';
import { AddTaskComponent } from './amp/wokds/addtask';
import { TaskCardsComponent } from './amp/tasks/tasks';
import { NewTaskComponent } from './amp/tasks/newtask';
import { AircraftsComponent } from './amp/acs/acs';
import { NewAircraftComponent } from './amp/acs/newac';
import { PartsComponent } from './inventory/parts';
import { ReturnComponent } from './inventory/return';
import { IssueComponent } from './inventory/issue';
//import { PurcahseOrdersComponent } from './orders/po/po';
//import { NewPurchaseOrdersComponent } from './orders/po/newpo';
//import { RepairOrdersComponent } from './orders/ro/ro';
//import { NewRepairOrderComponent } from './orders/ro/newro';
import { AtaComponent } from './settings/ata/ata';
import { AtarelComponent } from './settings/ata/atarel';
import { DefectComponent } from './reports/defect';
import { NewPNComponent } from './settings/pns/newpn';
import { ItemRelComponent } from './reliability/item/item';
import { PNRelComponent } from './reliability/pn/pn';
import { PNTransComponent } from './settings/pns/pntrans';
import { RqstnComponent } from './rqstn/rqstn';
import { UsersComponent } from './admin/users';
import { NewUserComponent } from './admin/newuser';
import { PNsComponent } from './settings/pns/pn';
import { ListWorkOrdersComponent } from './amp/wokds/listwkds';
import { PrintWorkOrdersComponent } from './amp/wokds/print';
import { ACFlightsComponent } from './tech/flights/acflights';
import { NewACLogsComponent } from './tech/flights/newlog';
import { SchedulesComponent } from './tech/schedule/schdule';
import { NewSchedulesComponent } from './tech/schedule/newschedule';
import { ECMComponent } from './tech/ecm/ecm';
import { ADDECMComponent } from './tech/ecm/add';
import { DelayComponent } from './tech/flights/delay';
import { FlightUnitsComponent } from './tech/flights/units';
import { LoginComponent } from './login/login';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashInventoryComponent } from './inventory/dash/dash';
import { ACStatusComponent } from './reports/acstatus';
import { NewAircraftUnitComponent } from './amp/acs/units';
import { MELsComponent } from './mel/mel';
import { NewMELComponent } from './mel/newmel';

import { RoutesComponent } from './routes/routes';
import { NewRouteComponent } from './routes/newroute';


import { EmpsComponent } from './emps/emps';
import { NewEMPComponent } from './emps/newemp';
import { TaskRevComponent } from './amp/tasks/rev';
import { ToolsComponent } from './tools/tools';
import { NewWKDComponent } from './amp/wokds/newkod';
import { NewAPUComponent } from './tech/apu/newapu';
import { APUComponent } from './tech/apu/apu';
import { NewInvPartComponent  } from './inventory/newpart';
import { NewPOComponent  } from './orders/newpo';
import { ReceeiveComponent  } from './receive/receive';
import { RequisitionComponent  } from './req/newreq';

import { NewDefectRPTComponent  } from './reports/defectRpt';
import { DefPNRemInstComponent  } from './reports/defpnreminst';
import { PickListComponent  } from './inventory/picklist';
import { WOTaskMontComponent   } from './amp/wokds/taskmont';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    WorkOrdersComponent,
    AddTaskComponent,
    TaskCardsComponent,
    NewTaskComponent,
    AircraftsComponent,
    NewAircraftComponent,
    PartsComponent,
    ReturnComponent,
    IssueComponent,
    //PurcahseOrdersComponent,
    //NewPurchaseOrdersComponent,
    //RepairOrdersComponent,
    //NewRepairOrderComponent,
    AtaComponent,
    PNsComponent,
    AtarelComponent,
    DefectComponent,
    NewPNComponent,
    ItemRelComponent,
    PNRelComponent,
    PNTransComponent,
    RqstnComponent,
    UsersComponent,
    NewUserComponent,
    ListWorkOrdersComponent,
    PrintWorkOrdersComponent,
    ACFlightsComponent,
    NewACLogsComponent,
    SchedulesComponent,
    NewSchedulesComponent,
    ECMComponent,
    ADDECMComponent,
    DelayComponent,
    FlightUnitsComponent,
    LoginComponent,
    DashInventoryComponent,
    ACStatusComponent,
    NewAircraftUnitComponent,
    MELsComponent,
    NewMELComponent,
    RoutesComponent,
    NewRouteComponent,
    EmpsComponent,
    NewEMPComponent,
    TaskRevComponent,
    ToolsComponent,
    NewWKDComponent,
    NewAPUComponent,
    APUComponent,
    NewInvPartComponent,
    NewPOComponent,
    ReceeiveComponent,
    RequisitionComponent,
    NewDefectRPTComponent,
    DefPNRemInstComponent,
    PickListComponent,
    WOTaskMontComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgxEchartsModule,
    RouterModule,
    SuiModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
