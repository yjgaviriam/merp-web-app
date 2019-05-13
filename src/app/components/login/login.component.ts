import { Component, OnInit, HostListener } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicies/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Almacenara el tamaño de pantalla
   */
  public clientHeight: string;

  public username: string;

  public password: string;

  constructor(private userService: UserService, private router: Router) { }

  /**
   * @see {@link https://angular.io/guide/lifecycle-hooks#oninit}
   */
  ngOnInit(): void {
    this.clientHeight = window.innerHeight + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.clientHeight = window.innerHeight + 'px';
  }

  public login(): void {
    this.userService.login(this.username, this.password).subscribe((response: any) => {
      this.userService.setStatusLogged(this.username, response.data.token);
      location.reload();
    }, (error: HttpErrorResponse) => {
    });
  }

}
