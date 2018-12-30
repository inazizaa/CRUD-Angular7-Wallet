import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Account} from './account';
 import { Observable } from 'rxjs';
 import { commonResponse } from '../shared/commonResponse';
 

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) { }

  getList(customerNumber?): Observable<commonResponse>{
    let params: string = "";
    if(customerNumber){
      params = "?customerNumber="+customerNumber;
    }
    return this.httpClient.get<commonResponse>('http://localhost:7000/api/account/list' + params);
  }

update(account: Account){
    return this.httpClient.put('http://localhost:7000/api/account', account);
  }

  insert(account: Account){
    return this.httpClient.post('http://localhost:7000/api/account', account);
  }

  delete(account){
    return this.httpClient.delete('http://localhost:7000/api/account/'+ account);
  }
  
}
