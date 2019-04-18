import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lets-muschel',
  templateUrl: './lets-muschel.component.html',
  styleUrls: ['./lets-muschel.component.scss']
})
export class LetsMuschelComponent implements OnInit {
  size: number = 100;
  boolPlay: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  play(){
  this.boolPlay = !this.boolPlay;
  }

}
