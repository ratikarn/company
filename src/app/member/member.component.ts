import { Component, OnInit } from '@angular/core';

import { Member } from '../shared/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  edus: Array<string> = ['มัธยมศึกษา', 'ปริญาตรี', 'ปริญญาโท'];
  member: Member;

  constructor() {
    this.member = new Member('','','','','',false);
  }

  ngOnInit() {
  }

}
