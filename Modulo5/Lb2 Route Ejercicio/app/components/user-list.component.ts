import {Component} from '@angular/core';
import {USERS} from '../mock/user-mock';
import {User} from '../model/user';
import {userService} from '../service/user.service';

@Component({
    selector: 'user-list',
    templateUrl: 'app/templates/user-list.html',
    providers: [userService]
})
export class userListComponent {
  constructor(private userservice: userService){}


    title: string = "Usuarios";
    users:User[] = USERS;
    user:User;

  ngOnInit(){
		this.userservice.getUsers()
		.then(productos => this.users = productos)
		.catch(error => console.log(error));
	}
  onSelectUser(user:User){
    this.user = user; 
  }

}
