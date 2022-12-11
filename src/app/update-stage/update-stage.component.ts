import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-update-stage',
  templateUrl: './update-stage.component.html',
  styleUrls: ['./update-stage.component.css']
})
export class UpdateStageComponent implements OnInit {

  newStage = new stage();
  typeStages! : typeStage[];
newCodec! : number;
newCateg! : typeStage;

  constructor(private activatedRoute: ActivatedRoute,private stageService: StageService,private router:Router) { }
 
  ngOnInit(): void {
    this.typeStages = this.stageService.typeStage;
    this.newStage=this.stageService.consulterStage(this.activatedRoute.snapshot.params['id'])
  }
  updateStage(){
    
    this.stageService.modifierStage(this.newStage);
    this.router.navigate(['/stage']);
    }


}
