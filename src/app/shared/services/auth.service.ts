import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, password: string) {
    let cred = this.auth.signInWithEmailAndPassword(email, password);
    localStorage.setItem('user', JSON.stringify(cred));
    return cred;
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  logout() {
    localStorage.setItem('user', JSON.stringify('null'));
    return this.auth.signOut();
  }

}
