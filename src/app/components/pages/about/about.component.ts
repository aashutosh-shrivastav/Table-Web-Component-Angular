import { Component, OnInit } from '@angular/core';
import {IHero} from '../../../models/hero';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public heroes: IHero[];

  constructor() { }

  ngOnInit(): void {
  }

}
