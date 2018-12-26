import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }

  getList(accountId?){
    let params: string = "";
    if(accountId){
      params = "?account="+accountId;
    }
    return this.httpClient.get('http://localhost:8080/transaction/list' + params);
  }


  // getList(an?){
  //   if(an == undefined){
  //   return this.httpClient.get('http://localhost:8080/transaction/listnya');
  //   }else{
  //   return this.httpClient.get('http://localhost:8080/transaction/list?account=' + an);
  //   }
  // }

  update(transaction: Transaction){
    return this.httpClient.put('http://localhost:8080/transaction/put', transaction);
  }

  insert(transaction: Transaction){
    return this.httpClient.post('http://localhost:8080/transaction/post', transaction);
  }

  delete(transaction){
    return this.httpClient.delete('http://localhost:8080/transaction/delete/'+ transaction);
  }
}
