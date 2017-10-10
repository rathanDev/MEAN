import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {User} from '../model/user';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getAll() {
    return this.http.get('/users').map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get('/users/' + _id).map((response: Response) => response.json());
  }

  create(user: User) {
    // return this.http.post('/users/register', user)
  }

}