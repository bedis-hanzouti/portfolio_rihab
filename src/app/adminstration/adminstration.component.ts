import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.css']
})
export class AdminstrationComponent implements OnInit {
  user = new compte();
  erreur = false;
  constructor(private authServ : AuthService, private router: Router) { }
  
  ngOnInit(): void {
  }

  connected(){
    let permission: boolean = this.authServ.connect(this.user); 
    console.log("Tentative de connexion :" + this.user.email);
    if (permission)
      this.router.navigate(['/stage']);
    else
      this.erreur=true;
    }
    reset() {
      this.erreur=false;
      }
}
