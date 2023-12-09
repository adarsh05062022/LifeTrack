import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-health-details',
  templateUrl: './personal-health-details.component.html',
  styleUrls: ['./personal-health-details.component.scss']
})
export class PersonalHealthDetailsComponent {
   editable:boolean=false;


   changeEditable():any{
      this.editable = !this.editable
   }
}
