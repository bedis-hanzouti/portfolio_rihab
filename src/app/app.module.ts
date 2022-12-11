import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { StageComponent } from './stage/stage.component';
import { TypeStageComponent } from './type-stage/type-stage.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { UpdateTypeStageComponent } from './update-type-stage/update-type-stage.component';
import { AddTypeStageComponent } from './add-type-stage/add-type-stage.component';
import { ExperienceAndStageComponent } from './experience-and-stage/experience-and-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
   
    LoginComponent,
    StageComponent,
    TypeStageComponent,
    AddStageComponent,
    UpdateStageComponent,
    AdminstrationComponent,
    UpdateTypeStageComponent,
    AddTypeStageComponent,
    ExperienceAndStageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
