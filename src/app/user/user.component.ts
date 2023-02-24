import { Component } from '@angular/core';
import { Planter } from '../planter';
import { PlanterOperationService } from '../planter-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PlanterDto } from '../planter-dto';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  __planterService:PlanterOperationService; // creating object of Service layer
  router:Router;

  
  allPlanter : Array<Planter> = [];
  watchList : Array<Planter> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(planterService:PlanterOperationService,router:Router)
  {
    this.__planterService = planterService;
    this.allPlanter = this.__planterService.getPlanterArr();
    this.router = router;
    console.log(this.allPlanter.length);
  }
  viewPlanterDetails(pid:string)
  {
    
    this.router.navigate(['planterDetail',pid]);
  }



  goForBuy(planter:string)
  {
    let planterId = parseInt(planter);
    console.log(" code to buy "+planterId+" planter");
    
  }

  addWatchlist(planter:string)
  {
    let addPlanterId = parseInt(planter);
    
    this.allPlanter.forEach(p=>{
      if(p.planterId == addPlanterId)
      {
        this.watchList.push(p);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allPlanter = this.__planterService.getPlantersByCategory(filterValue);
  }
  getFilterData2(filterValue:string)
  {
  
    console.log(" Filter Value "+filterValue);

    this.allPlanter = this.__planterService.getPlantersByStarRating(parseInt(filterValue));
  }

//  __planterService:PlanterOperationService; // creating object of Service layer
 //router:Router;

  allPlanters:Planter[]=[];
  //allPlant: Array<Planter> = [];
  // watchList : Array<Planter> = [];
  // watchlistCount:number=0 ;

  // priceHighCss:string = "color:crimson";
  // priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  // priceNormalCSS:string = "color:black";

  // constructor(private planterService:PlanterOperationService,router:Router)
// {
//   planterService.getAllPlantersFromSpring().subscribe(
//     data=>{
//       this.allPlanters=data;

//     },
//     error=>{

//     }
//   );

// }
  // {
  //   this.__planterService = planterService;
  //   this.allPlanters = this.__planterService.getPlanterArr();
  //   //this.router = router;
  //   console.log(this.allPlanters.length);
  // }
  // viewPlanterDetails(pid:string)
  // {
    
  //   //this.router.navigate(['planters',pid]);
  // }



  // goForBuy(planter:string)
  // {
  //   let planterId = parseInt(planter);
  //   console.log(" code to buy "+planterId+" planter");
    
  // }

  // addWatchlist(planter:string)
  // {
  //   let addPlanterId = parseInt(planter);
    
  //   this.allPlanters.forEach(p=>{
  //     if(p.planterId == addPlanterId)
  //     {
  //       this.watchList.push(p);
        
  //     }
  //   });
  //   this.watchlistCount = this.watchList.length;
  //   console.log(this.watchList);
    
  // }

  // getFilterData(filterValue:string)
  // {
  //   console.log(" Filter Value "+filterValue);

  //   this.allPlanters = this.__planterService.getPlantersByCategory(filterValue);
  // }
  // getFilterData2(filterValue:string)
  // {
  
  //   console.log(" Filter Value "+filterValue);

  //   this.allPlanters = this.__planterService.getPlantersByStarRating(parseInt(filterValue));
  // }
  getFilterData3(filterValue:string)
  {
  
    console.log(" Filter Value "+filterValue);

    this.allPlanters = this.__planterService.getPlantersByTypesOfPlanters(filterValue);
  }



}
