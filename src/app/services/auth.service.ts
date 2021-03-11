import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ENVIRONMENT
import { environment } from '../../environments/environment';

// MODELS
import { ApiResponse } from '../models/Api';
import { AuthApiRequestParams as RequestModel, AuthApiResponse as ResponseModel } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  public login({ usermail, password }: RequestModel) {
    return new Observable<ResponseModel>(subscriber => {
      subscriber.next({
        token: 'token validacao',
        username: 'nome usuario',
      });
    })
  }

  public logout(token: string) {
    return new Observable<ResponseModel>(subscriber => {
      subscriber.next({
        token: '',
        username: '',
      });
    })
  }
}
