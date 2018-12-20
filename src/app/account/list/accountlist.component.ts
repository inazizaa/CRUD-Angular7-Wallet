import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AccountformComponent } from '../form/accountform.component';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
  @ViewChild('formAccount')
  formAccount:AccountformComponent;

  listAccount: Account[]=[];
  showDetail:boolean=true;
  selectedAccount: Account = new Account();


  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.loadData();
  }

  selectAccount(account: Account) {
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customerId = account.customerId;
    
    this.selectedAccount = copyAccount;
    this.showDetail = true;
    this.formAccount ? this.formAccount.updateData(): "";
  }
  loadData() {
    this.accountService.getList().subscribe((response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listAccount, response);
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });
  }
  
  delete(accountNumber) {
    this.accountService.delete(accountNumber).subscribe(
      (response)=>{
        location.href="/accountlist";
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
    
  }
  prosesResult(result) {
    if (result) {
      this.showDetail= false;
      this.loadData();
    }
}
}
