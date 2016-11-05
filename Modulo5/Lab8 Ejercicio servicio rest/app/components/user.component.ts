import { Component } from '@angular/core';
import {User} from "../models/user";
import {userService} from "../service/user.service"

@Component({
  selector: 'user-app',
  templateUrl: 'app/templates/user.html',
  providers: [userService]
})
export class userComponent {
titulo:string = "Modulo de usuarios"


   users: User[];

    constructor(private userService: userService) {

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
