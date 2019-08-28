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


//Replace Observable by an HTTPS call in the future

@Injectable()
export class AuthService{
    currentUser: User;
    
    public login(credentials){
        if (credentials.username === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
            console.log("Logged In");
            return Observable.create(observer => {
                let access = (credentials.username === "user" && credentials.password === "psw");
                //TODO: Make a request to your backend to make a real check!
                this.currentUser = new User('Timmy', 'timmy@gmail.com');
                observer.next(access);
                observer.complete();
            });
            
        }
    }

    public getUserInfo(): User {
        return this.currentUser;
    }

    public logout() {
        return Observable.create(observer => {
            this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    }

    public register(credentials) {
        if(credentials.username === null || credentials.password === null || credentials.email === null) {
            return Observable.throw("Please complete all the form");
        }else{
            //TODO: Store information DB
            return Observable.create(observer => {
                observer.next(true);
                observer.complete();
            });
        }
    }
}