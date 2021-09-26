import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../../models/card.model";

@Component({
  selector: 'card-container-cmp',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  @Input()
  cards: Card[] = [
    {
      headerText: 'header 1', bodyText: 'test abc'
    },
    {
      headerText: 'header 2', bodyText: 'test abc'
    },
    {
      headerText: 'header 3', bodyText: 'test abc'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
