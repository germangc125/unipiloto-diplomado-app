import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from "../../model/user";
import { UserService } from "../../providers/user.service";
import { NewUserPage } from '../new-user/new-user';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [UserService]
})
export class ContactPage {
  users: User[];
  pushPage = NewUserPage;
  constructor(public navCtrl: NavController,private userService: UserService) {
  
  }
 getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => {
                this.users = users;
            },
            error => {
                console.log(error);
            }
        );
    }
   ngOnInit(): void {
        this.getUsers();
    }

}
