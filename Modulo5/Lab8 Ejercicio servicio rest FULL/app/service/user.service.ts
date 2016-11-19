import {Injectable} from "@angular/core";
import {User} from "../models/user";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class userService {

    private userURI = 'http://138.68.0.83:7070/api/v1/user';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http.get(this.userURI + "/list")
            .map(response => response.json() as User[])
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}