import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async logout() {
    this.authService.logout().then(() => {
      console.log("LOGOUT SUCCESS");
      this.router.navigateByUrl('/login');
    }).catch(error => {
      console.error(error);
    });
  }
}
