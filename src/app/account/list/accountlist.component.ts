import { Component, OnInit, ViewChild } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AccountformComponent } from '../form/accountform.component';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {
  @ViewChild('formAccount')
  formAccount:AccountformComponent;

  listAccount: Account[]=[];
  showDetail:boolean=false;
  selectedAccount: Account = new Account();


  constructor(private accountService: AccountService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
     this.route.params.subscribe(params =>{
       let customerNumber = params['customerNumber'];
    this.loadData(customerNumber);
   });
  }

  selectAccount(account: Account) {
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customerId = account.customerId;
    
    this.selectedAccount = copyAccount;
    this.showDetail = true;
    this.formAccount.updateData();
  }

  loadData(customerNumber?) {
    this.accountService.getList(customerNumber).subscribe(
      (response) => {
      console.log(JSON.stringify(response));
      Object.assign(this.listAccount, response.values);
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

  show(account : Account){
    this.router.navigate(['/transactionlist/', {accountNumber : account.accountNumber}])
   }


  prosesResult(result) {
    if (result) {
      this.showDetail= false;
      this.loadData();
    }
}
}
