import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'navbar-cmp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navbarBgColor: string = 'blue';

  constructor() { }

  ngOnInit(): void {

  }



}
