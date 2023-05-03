import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-meeting',
  templateUrl: './client-meeting.component.html',
  styleUrls: ['./client-meeting.component.css']
})
export class ClientMeetingComponent {
 constructor(private router:Router){}

 goBack(homePage:string):void{
  this.router.navigate([`${homePage}`]);
 }
}
