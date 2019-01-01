import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../account.service';
import { Router } from '@angular/router';
import { Account } from '../../account';
import { Customer } from 'src/app/customer/customer';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  customer = Object;

  accForm : FormGroup;

  @Output()
  result = new EventEmitter();
  constructor(private fb: FormBuilder, private data : AccountService, private router : Router) { }

  ngOnInit() {
    this.accForm = this.fb.group({
      accountNumber:[''],
      openDate : ["", Validators.required],
      balance : ["", Validators.required],
      customer : ["", Validators.required]
    });
  }
  insert(){
    let account: Account = new Account();
    
    // account.accountNumber = this.accForm.controls['accountNumber'].value;
    account.openDate = this.accForm.controls['openDate'].value;
    account.balance = this.accForm.controls['balance'].value;

    let customer = new Customer();
    customer.customerNumber = this.accForm.controls['customer'].value;
    account.customerId = customer;

    console.log(account);

    this.data.insert(account).subscribe(
      (response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      location.href="/account-list";
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  setSelectedCustomer(customer : Customer){
    this.accForm.controls['customer'].setValue(customer.customerNumber);
    alert(customer.customerNumber);
  
  this.accForm.updateValueAndValidity();
  }
  cancel(){
    location.href="./accountlist";
  }
}
