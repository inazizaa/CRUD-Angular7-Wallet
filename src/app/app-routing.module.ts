import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerformComponent } from './customer/form/customerform.component';
import { CustomerlistComponent } from './customer/list/customerlist.component';
import { AccountformComponent} from './account/form/accountform.component';
import {AccountlistComponent} from './account/list/accountlist.component';
import { TransactionlistComponent } from './transaction/list/transactionlist.component';
import { TransactionformComponent } from './transaction/form/transactionform.component';
import { CreatecustomerComponent } from './customer/create/createcustomer.component';
import { CreatetransactionComponent } from './transaction/create/createtransaction/createtransaction.component';
import { CreateaccountComponent } from './account/create/createaccount/createaccount.component';



const routes: Routes = [
  {
    path: 'customerform',
    component : CustomerformComponent
  },
  {
    path: 'customerlist',
    component : CustomerlistComponent
  },
  {
    path: 'customercreate',
    component : CreatecustomerComponent
  },
  {
    path: 'accountform',
    component : AccountformComponent
  },
  {
    path: 'accountlist',
    component : AccountlistComponent
  },
  {
    path: 'accountcreate',
    component : CreateaccountComponent
  },
  {
    path: 'transactionlist',
    component : TransactionlistComponent
  },
  {
    path: 'transactionform',
    component : TransactionformComponent
  },
  {
    path: 'transactioncreate',
    component : CreatetransactionComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
