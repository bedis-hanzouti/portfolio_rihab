import { Component, OnInit } from '@angular/core';
import { stage } from '../model/stage.model';
import { AuthService } from '../services/auth.service';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

   tab_art : stage[];
  zeroStyle = {'color':'red'};
  
  constructor(private stageService: StageService,public authServ : AuthService  ) {
    this.tab_art = stageService.listeStages();
    console.log(this.tab_art);
    
  }
  suppStage(art: stage) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer ce stage ?");
 if (conf) {
    this.stageService.suppStage(art);
    console.log("Suppression avec succes :"+art.nomSociete);}
 }
  ngOnInit(): void {
  }

}
