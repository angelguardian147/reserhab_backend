import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../modals/login/login.component';
import { HelpComponent } from '../modals/help/help.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
