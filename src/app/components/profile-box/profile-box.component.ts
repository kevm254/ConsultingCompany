import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'profile-box-cmp',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.css']
})
export class ProfileBoxComponent implements OnInit {
  @Input()
  profilePicUrl: string = '';

  @Input()
  header: string = '';

  @Input()
  body: string[] = [''];

  constructor() { }

  ngOnInit(): void {
  }

}
