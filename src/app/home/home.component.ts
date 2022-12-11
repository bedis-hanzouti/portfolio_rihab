import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nom:any;
  constructor() { }

  ngOnInit(): void {
      this.nom=localStorage.getItem("userCourant");
  }

}
