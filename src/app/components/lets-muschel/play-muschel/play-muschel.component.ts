import { Component, OnInit } from '@angular/core';
import { Untertane } from '../../../shared/models';

@Component({
  selector: 'app-play-muschel',
  templateUrl: './play-muschel.component.html',
  styleUrls: ['./play-muschel.component.scss']
})
export class PlayMuschelComponent implements OnInit {
  untertanen: Array<Untertane> = [];
  nameUntertane: string = null;
  cntUntertanen: number = 0;
  boolChoosed: boolean = false;
  choosedUntertane: Untertane = null;

  constructor() { }

  ngOnInit() {
    this.cntUntertanen = 0;
    this.choosedUntertane=null;
  }

  addUntertane() {
    if (this.nameUntertane != null) {
      this.untertanen.push({ Id: this.cntUntertanen, Name: this.nameUntertane });
      this.cntUntertanen++;
      this.nameUntertane = "";
    }
  }

  chooseUntertane() {
    let untertanen = this.untertanen.length;
    this.choosedUntertane = this.untertanen[this.krasserAlgorithmus(untertanen)]
    this.boolChoosed = true;
  }

  krasserAlgorithmus(untertanen) {
    return Math.floor((Math.random()*untertanen));
  }
}
