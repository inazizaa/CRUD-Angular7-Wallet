import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionformComponent } from '../form/transactionform.component';
import { Transaction } from '../transaction';
import { TransactionService } from 'src/app/transaction/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit {
  @ViewChild('formTransaction')
  formTransaction : TransactionformComponent;

  listTransaction : Transaction[] = [];
  showDetail: boolean = true;
  selectedTransaction : Transaction = new Transaction();

  constructor(private transactionService : TransactionService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let accountNumber = params['accountNumber'];
    this.loadData(accountNumber);
    });
  }
  
  selectTransaction(transaction : Transaction){
    let copyTransaction= new Transaction(); //let hanya berlaku di satu blok, car adalah variabel global
    copyTransaction.idtrans = transaction.idtrans;
    copyTransaction.amountsign = transaction.amountsign;
    copyTransaction.amount = transaction.amount;
    copyTransaction.type = transaction.type;
    copyTransaction.accountId = transaction.accountId;

    this.selectedTransaction = copyTransaction;
    this.showDetail = true;
    this.formTransaction.updateData();

  }

  loadData(accountNumber?){
    this.transactionService.getList(accountNumber).subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        Object.assign(this.listTransaction, response.values);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    });
  }

  delete(idtrans){
    console.log("idtrans:"+idtrans)
    this.transactionService.delete(idtrans).subscribe(
      (response)=>{
        // console.log(JSON.stringify(response));
        location.href = '/transactionlist';
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

  // show(transaction : Transaction){
  //   this.router.navigate(['/transactionlist/', {transactionId : transaction.idtrans}])
  //  }

  prosesResult(result){
    if(result){
      this.showDetail=false;
      this.loadData();
    }
  }
}