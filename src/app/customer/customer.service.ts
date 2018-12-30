import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from './customer';
import { Observable } from 'rxjs';
import { commonResponse } from '../shared/commonResponse';




@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient:HttpClient) { }

  getList(): Observable<commonResponse>{
    return this.httpClient.get<commonResponse>('http://localhost:7000/api/customer/list');
  }

update(customer: Customer){
    return this.httpClient.put('http://localhost:7000/api/customer', customer);
  }

insert(customer: Customer){
    return this.httpClient.post('http://localhost:7000/api/customer', customer);
  }

delete(customer){
    console.log(":"+customer);
    return this.httpClient.delete('http://localhost:7000/api/customer/'+ customer);
  }
}
