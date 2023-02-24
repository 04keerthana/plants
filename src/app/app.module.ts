import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdminWorkComponent } from './admin-work/admin-work.component';
import { PlanterDetailsComponent } from './planter-details/planter-details.component';
import { UserComponent } from './user/user.component';
import { PlanterPipe } from './planter-pipe';
import { OnlySeedsComponent } from './only-seeds/only-seeds.component';
import { OnlyPlantsComponent } from './only-plants/only-plants.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PlanterListComponent } from './planter-list/planter-list.component';
import { AddPlanterComponent } from './add-planter/add-planter.component';
import { PlanterDto } from './planter-dto';
import { PlanterFilterationsComponent } from './planter-filterations/planter-filterations.component';



const allLinks:Routes = [
  // {path:'launchplanter',component:AdminWorkComponent},
  {path:'planterDetail',component:PlanterDetailsComponent},
  {path:'onlySeeds',component:OnlySeedsComponent},
  {path:'onlyPlants',component:OnlyPlantsComponent},
  {path:'viewallplanters',component:UserComponent},
  // {path:'filters',component:FilterComponent},
  {path:'plantersinDB',component:PlanterListComponent},
  {path:'addplanters',component:AddPlanterComponent},
  {path:'getfilterations',component:PlanterFilterationsComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    // AdminWorkComponent,
    PlanterDetailsComponent,
    UserComponent,
    PlanterPipe,
    OnlySeedsComponent,
    OnlyPlantsComponent,
    // FilterComponent,
    PlanterListComponent,
    AddPlanterComponent,
    PlanterFilterationsComponent,
     


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks),FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
