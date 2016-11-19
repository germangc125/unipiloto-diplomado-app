import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import {userService} from "../service/user.service";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/templates/user-detail.html'
})

export class usertDetailComponent {
    @Input()
    user: User;

    constructor(private userService: userService){

    }

    save(): void {
     //   this.productService.update(this.product)
       //     .then((response) => console.log(response));
    }
}

