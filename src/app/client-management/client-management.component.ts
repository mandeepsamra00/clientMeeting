import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {
  constructor(private router:Router){}

  meetingPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
 
}
