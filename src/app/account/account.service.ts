import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Account} from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) { }

  getList(){
    return this.httpClient.get('http://localhost:8080/account/listnya');
  }

  update(account: Account){
    return this.httpClient.put('http://localhost:8080/account/put', account);
  }

  insert(account: Account){
    return this.httpClient.post('http://localhost:8080/account/post', account);
  }

  delete(account){
    return this.httpClient.delete('http://localhost:8080/account/delete/'+ account);
  }
}
