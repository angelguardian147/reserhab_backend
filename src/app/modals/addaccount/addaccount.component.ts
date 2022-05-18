import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { IAccount } from 'src/app/interfaces/account';
import { JwtResponse } from 'src/app/interfaces/jwt-response';
import { IRole } from 'src/app/interfaces/role';
import { IUser } from 'src/app/interfaces/user';
import { LoginService } from '../login/login.service';
import { AddaccountService } from './addaccount.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent implements OnInit, OnDestroy {

  @Input() Role!: string;
  @Input() username!: string;
  account: IAccount = {};
  user: IUser = {};
  roles: IRole[] = [];

  //subscriptions
  createSupscription!: Subscription;
  roleSupscription!: Subscription;

  constructor(public activeModal: NgbActiveModal,
              private accountService: AddaccountService,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.initVar();
  }

  initVar(){
    this.user.usuario_name = this.username;
    this.getRole();
  }

  create() {
    if (this.user && this.roles) {
      this.user.role = this.roles;
      this.account.user = this.user;
      this.createSupscription = this.accountService.create(this.account).subscribe({
        next: (res) => {
          res = Object.values(res)[0];
          if (res && res.access_token) {
            this.loginService.setPage(res);
            this.activeModal.dismiss('Cross click');
          }
        },
        error: (err) => {
          console.log(err);
          this.activeModal.dismiss('Cross click');
        }
      });
    }
  }

  getRole(){
    if(this.Role){
      this.roleSupscription = this.accountService.getRole(this.Role).subscribe({
        next: (res) => {
          this.roles.push(res);
        },
        error: (err)=> {
          console.log(err);
        }
      });
    }
  }

  ngOnDestroy(): void {
      this.createSupscription.unsubscribe();
      this.roleSupscription.unsubscribe();
  }

}
