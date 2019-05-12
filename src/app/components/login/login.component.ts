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

  public email: string;

  public password: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.clientHeight = window.innerHeight + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.clientHeight = window.innerHeight + 'px';
  }

  public login() {
    this.userService.login(this.email, this.password).subscribe((response: any) => {
      this.userService.setStatusLogged(this.email, this.password);
    }, (error: HttpErrorResponse) => {
      
    });
  }

}
