import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  nom: any ;
  role:any

  constructor(private authServ : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.nom=localStorage.getItem("userCourant");
    this.role=localStorage.getItem("role");
    console.log(this.role);
    
  }
  disconnect(){
    this.authServ.disconnect()
  }

}
