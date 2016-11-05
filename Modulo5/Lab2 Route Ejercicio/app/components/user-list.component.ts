import {Component} from '@angular/core';
import {User} from '../model/user';
import {userService} from '../service/user.service';
import {Router} from "@angular/router";

@Component({
    selector: 'user-list',
    templateUrl: 'app/templates/user-list.html',
    providers: [userService]
})
export class userListComponent {
  constructor(private router: Router,private userservice: userService){}
    title: string = "Usuarios";
    users:User[];
    userSelected:User;

  ngOnInit(){
		this.userservice.getUsers()
		.then(usuarios => this.users = usuarios)
		.catch(error => console.log(error));
	}
  onSelectUser(user:User){
    this.userSelected = user; 
  }
   goToDetail(){
    this.router.navigate(['user/detail/', this.userSelected.id]);
  }
}
