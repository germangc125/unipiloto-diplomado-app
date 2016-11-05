import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProductService {

    private productsURI = 'http://138.68.0.83:7070/api/v1/product/list';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productsURI)
            .map(response => response.json() as Product[])
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
}