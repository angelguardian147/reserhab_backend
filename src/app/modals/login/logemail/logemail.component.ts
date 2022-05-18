import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-logemail',
  templateUrl: './logemail.component.html',
  styleUrls: ['./logemail.component.scss']
})
export class LogemailComponent implements OnInit {

  @Output() notification: EventEmitter<string> = new EventEmitter<string>();
  username!: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendBackUser(){
    this.notification.emit(this.username);
  }

}
