import { Injectable } from '@angular/core';
import { stage } from '../model/stage.model';
import { typeStage } from '../model/typeStage.model';
@Injectable({
  providedIn: 'root'
})
export class StageService {
  tab_stage!: stage[];
  typeStage!:typeStage[];
  
  typeStages :{codec : number; niveau: string ; type : string}[];
    stage: any;
    
  constructor() {
   
    
      this.typeStages = [
        {codec : 1, niveau : "First Year", type:"Initiation"},
        {codec : 2, niveau : "Second Year", type:"Persectionement"},
        {codec : 3, niveau : "Third Year", type:"PFE"}
      ];
    
      this.tab_stage= [
       {
        id:1,nomSociete:"LCSC L'AHBAIEL CUSTOM SERVICES AND CONSULTING",dateDebut:"17-01-2021",dateFin:"10-02-2021",adresse:"Nabeul"
      ,typeStage:{codec : 1, niveau : "First Year", type:"Initiation"} },
       {
        id:2,nomSociete:"AfterCode",dateDebut:"09-01-2022",dateFin:"09-02-2022",adresse:"Nabeul"
       ,typeStage:{codec : 2, niveau : "Second Year", type:"Persectionement"}},
       {id:3,nomSociete:"Neapolis",dateDebut:"10-01-2023",dateFin:"15-05-2023",adresse:"Mrezga"
       ,typeStage:{codec : 3, niveau : "Third Year", type:"PFE"},}
        ];
        }
        listeStages():stage[] {
      return this.tab_stage;
      }
      ajouterStage(art: stage){
        this.tab_stage.push(art);
        console.log("Ajout avec succes : "+art.nomSociete);
       
     }
     suppStage(art: stage){
      const index = this.tab_stage.indexOf(art, 0);
      if (index > -1) {
      this.tab_stage.splice(index, 1);
      }
     }
    
    consulterStage(id:number): stage{
      this.stage = this.tab_stage.find(art => art.id == id)!;
      return  this.stage;
      }
      modifierStage(art: stage) {
      this.suppStage(art);
      this.ajouterStage(art);
      }
  
       listeTypeStages():typeStage[] {
       return this.typeStages;
        }
       consulterTypeStage(id:number): typeStage{ 
       return this.typeStage.find(cat => cat.codec == id)!;
      }
    
    }