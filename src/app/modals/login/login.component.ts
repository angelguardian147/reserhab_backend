
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { AddaccountComponent } from '../addaccount/addaccount.component';
import { AddpasswordComponent } from './addpassword/addpassword.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  @Input() Role!: string;
  user: IUser = {};
  componentCell: boolean = true;
  componentEmail: boolean = false;

  //subscriptions
  confirmSupscription!: Subscription;

  constructor(public activeModal: NgbActiveModal,
              private modalService: NgbModal,
              public loginService: LoginService) { }

  ngOnInit(): void {
      
  }

  onNotify(notification: string){
    this.user.usuario_name = notification;
  }

  confirmUser(){
    if (this.user.usuario_name) {
      this.confirmSupscription = this.loginService.confirmUser(this.user).subscribe({
        next: (res) => {
          if(res){
            const modal = this.modalService.open(AddaccountComponent, {size: 'xl'});
            modal.componentInstance.username = this.user.usuario_name;
            modal.componentInstance.Role = this.Role;
            
            this.activeModal.dismiss('Cross click');
          }else{
            
          }
        },
        error: (err) => {
          console.log(err);
          const modalPass = this.modalService.open(AddpasswordComponent);
          modalPass.componentInstance.username = this.user.usuario_name;
          
          this.activeModal.dismiss('Cross click');
        }
      });
    }
  }

  logEmail(){
    this.componentCell = false;
    this.componentEmail = true;
  }

  logCell(){
    this.componentCell = true;
    this.componentEmail = false;
  }

  ngOnDestroy(): void {
      this.confirmSupscription.unsubscribe();
  }

}
