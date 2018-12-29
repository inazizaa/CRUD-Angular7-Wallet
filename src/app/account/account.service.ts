import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Account} from './account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) { }

  getList(customerNumber?){
    let params: string = "";
    if(customerNumber){
      params = "?customerNumber="+customerNumber;
    }
    return this.httpClient.get('http://localhost:3000/account/list' + params);
  }


  update(account: Account){
    return this.httpClient.put('http://localhost:3000/account', account);
  }

  

  insert(account: Account){
    return this.httpClient.post('http://localhost:3000/account', account);
  }


  delete(account){
    return this.httpClient.delete('http://localhost:3000/account'+ account);
  }

  
}
