import { Component, OnInit } from '@angular/core';
import { stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';
import { StageService } from '../services/stage.service';
import { typeStageService } from '../services/typeStage.service';

@Component({
  selector: 'app-experience-and-stage',
  templateUrl: './experience-and-stage.component.html',
  styleUrls: ['./experience-and-stage.component.css']
})
export class ExperienceAndStageComponent implements OnInit {
  tabStage ?: stage[];
  tabTypeStage? : typeStage[];


  constructor(private stageService: StageService,private typestageService: typeStageService) { }

  ngOnInit(): void {
    this.tabStage = this.stageService.listeStages();
    this.tabTypeStage = this.typestageService.listeTypeStages();
  }
  

}
