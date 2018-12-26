import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Transaction } from '../transaction';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/transaction/transaction.service';
import { Account } from 'src/app/account/account';

@Component({
  selector: 'app-transactionform',
  templateUrl: './transactionform.component.html',
  styleUrls: ['./transactionform.component.css']
})
export class TransactionformComponent implements OnInit {
  @Input()
  transaction : Transaction;

  @Output()
  result = new EventEmitter();

  transactionFormGroup: FormGroup;

  constructor(private transactionService : TransactionService, private formBuilder: FormBuilder) { }

  ngOnInit() { //diinit pertama kali
    this.transactionFormGroup = this.formBuilder.group({
      idtrans:[''],
      amountsign: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['', Validators.required],
      accountId: ['', Validators.required]
    });
    this.updateData();
}

  submitData(){
    let transaction: Transaction = new Transaction();
    transaction.idtrans = this.transactionFormGroup.controls['idtrans'].value;
    transaction.amountsign = this.transactionFormGroup.controls['amountsign'].value;
    transaction.amount = this.transactionFormGroup.controls['amount'].value;
    transaction.type = this.transactionFormGroup.controls['type'].value;
  
    let account: Account = new Account(); // bikin variabel di angular
    account.accountNumber = this.transactionFormGroup.controls['accountId'].value;
    transaction.accountId = account;

    
    this.transactionService.update(transaction).subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        this.result.emit(true);
        location.href = '/transactionlist';
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

  updateData(){
    this.setDataToForm(this.transaction);
  }

  setDataToForm(transaction){
    if(transaction){
      this.transactionFormGroup.controls['idtrans'].setValue(this.transaction.idtrans);
      this.transactionFormGroup.controls['amountsign'].setValue(this.transaction.amountsign);
      this.transactionFormGroup.controls['amount'].setValue(this.transaction.amount);
      this.transactionFormGroup.controls['type'].setValue(this.transaction.type);
      this.transactionFormGroup.controls['accountId'].setValue(this.transaction.accountId.accountNumber);
    }
  }

  insertData(){
    let transaction: Transaction = new Transaction();
    transaction.idtrans = this.transactionFormGroup.controls['idtrans'].value;
    transaction.amountsign = this.transactionFormGroup.controls['amountsign'].value;
    transaction.amount = this.transactionFormGroup.controls['amount'].value;
    transaction.type = this.transactionFormGroup.controls['type'].value;
  
    let account: Account = new Account(); // bikin variabel di angular
    account.accountNumber = this.transactionFormGroup.controls['accountId'].value; //account isinya accountnumber diarahkan ke nama variabel accountId
    transaction.accountId = account; //menaruh variabel accountId ke dalam account
 
    this.transactionService.insert(transaction).subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        this.result.emit(true);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

  cancelChanges(){
    this.result.emit(true);
  }
}