import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


export class User {
    username: string;
    email: string;
    
    constructor(username: string, email: string){
        this.username = username;
        this.email = email;
    }
}



@Injectable()
export class AuthService{
    public login(credentials){
        if (credentials.username === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
            //TODO: Make a request to your backend to make a real check!
            console.log("Logged In");
        }
    }
}