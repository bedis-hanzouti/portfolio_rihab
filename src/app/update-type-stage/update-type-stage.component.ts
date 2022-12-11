import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { typeStageService } from '../services/typeStage.service';
import { typeStage } from '../model/typeStage.model';

@Component({
  selector: 'app-update-type-stage',
  templateUrl: './update-type-stage.component.html',
  styleUrls: ['./update-type-stage.component.css']
})
export class UpdateTypeStageComponent implements OnInit {
  typeStageCourant = new typeStage();
  constructor(private activatedRoute: ActivatedRoute, private  typestageService: typeStageService,private router 
    :Router) { }

  modifierTypeStage(){ 
    this. typestageService.modifierTypeStage(this.typeStageCourant);
     console.log("Type of stage is successfully changed  : "+ 
    this.typeStageCourant.niveau+":"+this.typeStageCourant.type);
    this.router.navigate(['typestage']);
    }



  ngOnInit(): void {
    this.typeStageCourant = this.typestageService.consulterTypeStage
(this.activatedRoute.snapshot.params['codec']);
console.log("Code article à modifier "+this.typeStageCourant.codec);
  }

}
