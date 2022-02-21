import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router,ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserServiceService
  ) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
