import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../login.component';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-addpassword',
  templateUrl: './addpassword.component.html',
  styleUrls: ['./addpassword.component.scss']
})
export class AddpasswordComponent implements OnInit, OnDestroy {

  @Input() username!: string;
  password!: string;
  message!: string;

  //subscriptions
  loginSubscription!: Subscription;

  constructor(public activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginSubscription = this.loginService.login(this.username, this.password).subscribe({
      next: (res) => {
        if (res && res.access_token) {
          this.loginService.setPage(res);
          this.activeModal.close();
        }
      },
      error: (err) => {
        this.message = err.error.error;
      }
    });
  }

  returnModal(){
    this.modalService.open(LoginComponent);
    this.activeModal.dismiss('Cross click');
  }

  ngOnDestroy(): void {
      this.loginSubscription.unsubscribe();
  }

}
