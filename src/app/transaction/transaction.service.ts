import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }
  getList(){
    return this.httpClient.get('http://localhost:8080/transaction/listnya');
  }

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
