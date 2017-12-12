import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('/assets/data.json');
  }
}
