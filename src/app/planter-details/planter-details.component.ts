import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planter } from '../planter';
import { PlanterOperationService } from '../planter-operation.service';
import { PlanterDto } from '../planter-dto';

@Component({
  selector: 'app-planter-details',
  templateUrl: './planter-details.component.html',
  styleUrls: ['./planter-details.component.css']
})
export class PlanterDetailsComponent {
  planterId:string='';
  plantName:string='';
  planterShape:string='';
  planterHeight:string='';
  planterCost:string='';
  
  constructor() {
    this.planterId=localStorage.getItem("planterId")||'';
    this.plantName=localStorage.getItem("plantName") ||'';
    this.planterShape=localStorage.getItem("planterShape") ||'';
    this.planterHeight=localStorage.getItem("planterHeight") ||'';
    this.planterCost=localStorage.getItem("planterCost") ||'';
    
   }

 

}
