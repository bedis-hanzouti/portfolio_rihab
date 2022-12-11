import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { compte } from '../model/compte.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new compte();
  erreur = false;
  constructor(private authServ : AuthService, private router: Router) { }
  connected(){
    let permission: boolean = this.authServ.connect(this.user); 
    console.log("Tentative de connexion :" + this.user.email);
    if (permission)
      this.router.navigate(['/home']);
    else
      this.erreur=true;
    }
    reset() {
      this.erreur=false;
      }
  ngOnInit(): void {
  }
}
