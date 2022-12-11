import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import { typeStage } from '../model/typeStage.model';
import { typeStageService } from '../services/typeStage.service';


@Component({
  selector: 'app-add-type-stage',
  templateUrl: './add-type-stage.component.html',
  styleUrls: ['./add-type-stage.component.css']
})
export class AddTypeStageComponent implements OnInit {
  newStage = new typeStage();
  
  constructor(private typestageService: typeStageService,private router:Router) { }
  addTypeStage(){
   this.typestageService.ajouterStage(this.newStage);
  this.router.navigate(['/typestage']);

  }
  ngOnInit(): void {
    
  }


}
