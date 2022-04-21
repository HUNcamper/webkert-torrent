import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
    // Promise
    /* this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
      console.log('This executed second.');
      this.router.navigateByUrl('/main');
    }).catch(error => {
      console.error(error, 'Incorrect email or password!');
    }).finally(() => {
      console.log('this is executed finally.');
    }); */

    // async-await
    /* try {
      // then
      const _ = await this.loadingService.loadingWithPromise(this.email.value, this.password.value)
      this.router.navigateByUrl('/main');
    } catch (error) {
      // catch
      console.error(error, 'Incorrect email or password!');
    }
    // finally
    console.log('this is executed finally.'); */

    // Observable
    // memory leak
    /* this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value, this.password.value)
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        {
          next: (data: boolean) => {
            this.router.navigateByUrl('/main');
          }, error: (error) => {
            console.error(error);
            this.loading = false;
          }, complete: () => {
            console.log('finally');
            this.loading = false;
          }
        }
      ); */

    this.authService.login(this.email.value, this.password.value).then((cred: { user: any; }) => {
      console.log("LOGIN SUCCESS");
      localStorage.setItem("user", JSON.stringify(cred.user));
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
