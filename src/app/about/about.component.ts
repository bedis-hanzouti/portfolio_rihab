import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  birthday="11 July 2001 "
  age=21
  city="Nabeul"
  degree=1
  phone=5269986
  mail="zouaouirihab03@gmail.com"
  qualities="Dynamic ,Organized ,Good Communication Skills."
  hobbies="Rhythmic Gymnastics   ,Travel."
  constructor() { }

  ngOnInit(): void {
  }

}
