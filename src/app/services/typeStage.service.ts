import { Injectable } from '@angular/core';
import { stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';

@Injectable({
  providedIn: 'root'
})
export class typeStageService {
  
  typeStage!:typeStage[];
  stage: any;
  
  constructor() {
   
    
      this.typeStage = [
        {codec : 1, niveau : "First Year", type:"Initiation"},
        {codec : 2, niveau : "Second Year", type:"Persectionement"},
        {codec : 3, niveau : "Third Year", type:"PFE"}
      ];
    
    }
       
      ajouterStage(art: typeStage){
        this.typeStage.push(art);
        console.log("Ajout avec succes : "+art.niveau);
       
     }
     suppStage(art: typeStage){
      const index = this.typeStage.indexOf(art, 0);
      if (index > -1) {
      this.typeStage.splice(index, 1);
      }
     }
    
       modifierTypeStage(art:typeStage ) {
    
            this.suppStage(art);
            this.ajouterStage(art);
            }
  
       listeTypeStages():typeStage[] {
       return this.typeStage;
        }
       consulterTypeStage(id:number): typeStage{ 
       return this.typeStage.find(cat => cat.codec == id)!;
      }
   

    }