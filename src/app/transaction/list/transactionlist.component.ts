import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionformComponent } from '../form/transactionform.component';
import { Transaction } from '../transaction';
import { TransactionService } from 'src/app/transaction/transaction.service';


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

  constructor(private transactionService : TransactionService) { }

  ngOnInit() {
    this.loadData();
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

  loadData(){
    this.transactionService.getList().subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        Object.assign(this.listTransaction, response);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    });
  }

  delete(idtrans){
    this.transactionService.delete(idtrans).subscribe(
      (response)=>{
        // console.log(JSON.stringify(response));
        location.href = '/transactionlist';
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

  prosesResult(result){
    if(result){
      this.showDetail=false;
      this.loadData();
    }
  }
}


