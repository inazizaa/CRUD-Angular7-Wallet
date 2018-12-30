import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Account } from 'src/app/account/account';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-transactioncombo',
  templateUrl: './transactioncombo.component.html',
  styleUrls: ['./transactioncombo.component.css']
})
export class TransactioncomboComponent implements OnInit {
listAccount: Account[]=[];

@Output()
account = new EventEmitter<Account>();

@Input()
selectedAccount = Account;

  constructor(private accountService : AccountService){}

  ngOnInit() {
    this.loadData();
  }

  onChange(index){
    console.log('selected : '+ index ? JSON.stringify(index) : "");
    if(this.listAccount && this.listAccount.length > 0){
      this.account.emit(this.listAccount[index]);
    }}

loadData(){
    this.accountService.getList().subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        Object.assign(this.listAccount, response.values);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }
}
