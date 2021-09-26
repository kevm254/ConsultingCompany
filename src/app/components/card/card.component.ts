import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-cmp',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() headerText: string = 'Sample Header';
  @Input() bodyText: string = 'Sample body text ';
  styles_width: string = '30%';
  styles_bgColor: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
