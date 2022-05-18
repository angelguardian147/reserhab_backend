import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelpComponent } from '../modals/help/help.component';
import { LoginComponent } from '../modals/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLogin(role: string){
    const modal = this.modalService.open(LoginComponent);
    modal.componentInstance.Role = role;
  }

  openHelp(){
    this.modalService.open(HelpComponent);
  }

}
