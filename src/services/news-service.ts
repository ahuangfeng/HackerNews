import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
    constructor(public http: HttpClient){
    }

    getNews() {
        return this.http.get<any[]>('/assets/news.json');
    }
}