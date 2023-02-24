// import { Component } from '@angular/core';
// import { Planter } from '../planter';
// import { PlanterOperationService } from '../planter-operation.service';

// @Component({
//   selector: 'app-admin-work',
//   templateUrl: './admin-work.component.html',
//   styleUrls: ['./admin-work.component.css']
// })
// export class AdminWorkComponent {
//   __planterService:PlanterOperationService;
//  p:Planter = new Planter(0,'rosePlant',0,'plant',0,0,'circle',0,'ceramicPlanter','rosePlant.jpg','toPlantSeed',0,0,0);
//   // p:Planter = new Planter(0,'rosePlant',0,'plant','winter','rosePlant.jpg','toPlantSeed',0,0,0);
  

//   constructor(planterService:PlanterOperationService)
//   {
//     this.__planterService = planterService;
//   }
//   doFormSubmit()
//   {
//     console.log("form submit button clicked ")
//     console.log(this.p);
    
//   }

//   readPlanter(planterId:string,plantName:string,planterHeight:string,planterCategory:string,drinageHoles:string,planterStock:string,planterShape:string,planterCost:string,typesOfPlanters:string,price:string,discount:string,about:string,image:string,starRating:string)
//   {
//       console.log(planterId+" "+plantName+" "+planterHeight+" "+planterCategory+" "+drinageHoles+" "+planterStock+" "+planterShape+" "+planterCost+" "+typesOfPlanters+" "+" "+price+" "+discount+" "+about+" "+image+" "+starRating);
//       let planterFromUser:Planter = new Planter(parseInt(planterId),plantName,parseInt(planterHeight),planterCategory,parseInt(drinageHoles),parseInt(planterStock),planterShape,parseInt(planterCost),typesOfPlanters,image,about,parseInt(discount),parseInt(price),parseInt(starRating));
//       this.__planterService.addPlanter(planterFromUser);
//   }

// }
