import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes ,RouterModule} from '@angular/router';
import { ClientMeetingComponent } from '../app/client-meeting/client-meeting.component';
import { ClientManagementComponent } from '../app/client-management/client-management.component';


const routes:Routes =[
  { path: 'client-management', component: ClientManagementComponent},
  {path:'client-meeting', component: ClientMeetingComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports:[
    RouterModule,
    
  ]
})
export class AppRoutingModule { }
