import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../user';
import { ReqresService } from '../../services/reqres.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private reqresService: ReqresService) {

    this.activatedRoute.params.subscribe((params) => {
      reqresService.getUser(params['id'])
        .subscribe((res: User) => this.user = res);
    });

  }

}
