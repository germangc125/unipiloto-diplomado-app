import { Injectable } from '@angular/core';
import {Product} from "../Model/product";
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the ProductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService {

  constructor(private http: Http) {
    console.log('Hello Service Provider');
  }

  private productsURI = 'http://138.68.0.83:7070/api/v1/product';
  private headers = new Headers({'Content-Type': 'application/json'});

    getProduct(id:number):Observable<Product> {
        const url = this.productsURI + "/detail/"+ id;
        return this.http.get(url)
            .map(
                response => response.json() as Product
                )
            .catch(this.handleError);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.productsURI + "/list")
            .map(
                response => response.json() as Product[]
                )
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.throw(error.message || error);
    }
    
}
