import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent implements OnInit {

  newStage = new stage();
  typeStages! : typeStage[];
newCodec! : number;
newCateg! : typeStage;

  constructor(private stageService: StageService,private router:Router) { }
  addStage(){
    this.newCateg = this.stageService.consulterTypeStage(this.newCodec);
    this.newStage.typeStage = this.newCateg;
    this.stageService.ajouterStage(this.newStage);
    this.router.navigate(['/stage']);
    }
  ngOnInit(): void {
    this.typeStages = this.stageService. listeTypeStages();
  }

}
