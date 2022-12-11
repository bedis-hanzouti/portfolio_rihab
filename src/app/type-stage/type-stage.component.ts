import { typeStageService } from '../services/typeStage.service';
import { Component, OnInit } from '@angular/core';
import { typeStage } from '../model/typeStage.model';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-type-stage',
  templateUrl: './type-stage.component.html',
  styleUrls: ['./type-stage.component.css']
})
export class TypeStageComponent implements OnInit {
  tab_art : typeStage[];
  zeroStyle = {'color':'red'};
  
  constructor(private typestageService: typeStageService,public authServ : AuthService) {
    this.tab_art = typestageService.listeTypeStages();
  }
  suppStage(art: typeStage) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer ce stage ?");
 if (conf) {
    this.typestageService.suppStage(art);
    console.log("Suppression avec succes :"+art.niveau);}
 }
 

  ngOnInit(): void {
  }

}
