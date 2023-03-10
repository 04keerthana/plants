import { Component } from '@angular/core';
import { Planter } from '../planter';
import { PlanterDto } from '../planter-dto';
import { PlanterOperationService } from '../planter-operation.service';

@Component({
  selector: 'app-planter-filterations',
  templateUrl: './planter-filterations.component.html',
  styleUrls: ['./planter-filterations.component.css']
})
export class PlanterFilterationsComponent {
  allPlanters:PlanterDto[]=[];
  constructor(private planterService:PlanterOperationService){}

  getPlanterId(planterId:string){
    this.planterService.getDetailsByPlanterId(parseInt(planterId)).subscribe(
      data=>{
          this.allPlanters = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );

  }


  

}
