import {Injectable} from "@angular/core";
import {USERS} from "../mock/user-mock";

@Injectable()
export class userService{
    getUsers(){
        return Promise.resolve(USERS);
    }
}