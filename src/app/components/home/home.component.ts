import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { User } from '../../user';
import { ReqresService } from '../../services/reqres.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  users: User[] = [];

  constructor(private reqresService: ReqresService, private router: Router) {
    this.getUsers();
  }


  getUsers() {
    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        console.log(res);
        this.users = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  userDetails(id: number) {
    console.log('User id: ', id);
    this.router.navigate(['user', id]);
  }
}
