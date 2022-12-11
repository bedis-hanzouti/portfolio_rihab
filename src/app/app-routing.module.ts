import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { ResumeComponent } from './resume/resume.component';
import { StageComponent } from './stage/stage.component';
import { TypeStageComponent } from './type-stage/type-stage.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { UpdateTypeStageComponent } from './update-type-stage/update-type-stage.component';
import { AddTypeStageComponent } from './add-type-stage/add-type-stage.component';
import { ExperienceAndStageComponent } from './experience-and-stage/experience-and-stage.component';

const routes: Routes = [ 
  {
    path:'stage',component:StageComponent
  },
  {
    path:'addtypestage',component:AddTypeStageComponent
  },
  {
    path:'addstage',component:AddStageComponent
  },
  {
    path:'exp',component:ExperienceAndStageComponent
  },
  {
    path:'uppdatestage/:id',component:UpdateStageComponent
  },
  {
    path:'typestage',component:TypeStageComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'detail',component:DetailComponent,
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'resume',component:ResumeComponent
  },
  {
    path:'adminstration',component:AdminstrationComponent
  },
  {path: "updatetypeStagee/:codec", component:UpdateTypeStageComponent},
  
  {path: "**", redirectTo: "adminstration", pathMatch: "full"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
