import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Customer } from 'src/app/customer/customer';


@Component({
  selector: 'app-accountform',
  templateUrl: './accountform.component.html',
  styleUrls: ['./accountform.component.css']
})
export class AccountformComponent implements OnInit {
  @Input()
  account: Account;

  @Output()
  result = new EventEmitter();
  
  accountFormGroup: FormGroup;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountFormGroup = this.formBuilder.group({
      accountNumber: [''],
      openDate: ['', Validators.required],
      balance: ['', Validators.required],
      customerId: ['', Validators.required],
    });
    this.updateData();
  }

  submitData(){
    let account: Account = new Account;
    account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
    account.openDate = this.accountFormGroup.controls['openDate'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;

    let customer = new Customer();
    customer.customerNumber = this.accountFormGroup.controls['customerId'].value;
    account.customerId = customer;

    this.accountService.update(account).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      location.href = '/accountlist';
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }

  updateData(){
    this.setDataToForm(this.account);
  }

  setDataToForm(account){
    if(account){
      this.accountFormGroup.controls['accountNumber'].setValue(this.account.accountNumber);
      this.accountFormGroup.controls['openDate'].setValue(this.account.openDate);
      this.accountFormGroup.controls['balance'].setValue(this.account.balance);
      this.accountFormGroup.controls['customerId'].setValue(this.account.customerId.customerNumber);
    }
 
  }

  insertData(){
    let account: Account = new Account();
    account.accountNumber = this.accountFormGroup.controls['accountNumber'].value;
    account.openDate = this.accountFormGroup.controls['openDate'].value;
    account.balance = this.accountFormGroup.controls['balance'].value;

    let customerNew = new Customer();
    customerNew.customerNumber = this.accountFormGroup.controls['customerId'].value;
    account.customerId = customerNew;

    this.accountService.insert(account).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
      location.href = '/accountlist';
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    }
    );
  }

  setSelectedCustomer(customer: Customer){
    this.accountFormGroup.controls['customer'].setValue(customer.customerNumber);
    this.accountFormGroup.updateValueAndValidity();
  }

   cancel(){
    this.result.emit(true);
  }
}
