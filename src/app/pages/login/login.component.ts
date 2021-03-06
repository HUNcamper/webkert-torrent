import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;

    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).then((cred: { user: firebase.default.User | null; }) => {
      console.log("LOGIN SUCCESS");
      console.log(cred);
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch((error: any) => {
      console.error(error);
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }

}
