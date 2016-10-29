import {Component,OnInit} from '@angular/core';
import {User} from '../model/user'
import {userService} from '../service/user.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/templates/user-detail.html',
    providers: [userService]
})

export class userDetailComponent  implements OnInit {
	title: string = "Detalles del usuario";

    user: User;
    constructor(
        private userService: userService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.userService.getUser(id)
                .then(user => this.user = user);
        });
    }
}