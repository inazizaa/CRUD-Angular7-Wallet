import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';
import { commonResponse } from '../shared/commonResponse';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }

  getList(accountNumber?):Observable<commonResponse>{
    let params: string = "";
    if(accountNumber){
      params = "?accountNumber="+accountNumber;
    }
    return this.httpClient.get<commonResponse>('http://localhost:7000/api/transaction/list' + params);
  }

  update(transaction: Transaction){
    return this.httpClient.put('http://localhost:7000/api/transaction', transaction);
  }

  insert(transaction: Transaction){
    return this.httpClient.post('http://localhost:7000/api/transaction', transaction);
  }

  delete(transaction){
    
    return this.httpClient.delete('http://localhost:7000/api/transaction/'+ transaction);
  }
}
