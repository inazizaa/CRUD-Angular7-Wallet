import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerformComponent } from './customer/form/customerform.component';
import { CustomerlistComponent } from './customer/list/customerlist.component';
 import { AccountComponent } from './account/account.component';
 import { AccountformComponent } from './account/form/accountform.component';
 import { AccountlistComponent } from './account/list/accountlist.component';
 import { AccountService} from './account/account.service';
 import {TransactionService} from './transaction/transaction.service'
import { HttpClientModule} from '@angular/common/http';
import { CustomerService } from './customer/customer.service';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionformComponent } from './transaction/form/transactionform.component';
import { TransactionlistComponent } from './transaction/list/transactionlist.component';
import { from } from 'rxjs';
import { AccountcomboComponent } from './shared/combobox/account/accountcombo.component';
import { TransactioncomboComponent } from './shared/combobox/transaction/transactioncombo.component';
import { CreatecustomerComponent } from './customer/create/createcustomer.component';
import { CreateaccountComponent } from './account/create/createaccount/createaccount.component';
import { CreatetransactionComponent } from './transaction/create/createtransaction/createtransaction.component';

@NgModule({
  declarations: [ 
    AppComponent,
    CustomerformComponent,
    CustomerlistComponent,
     AccountComponent,
     AccountformComponent,
     AccountlistComponent,
     TransactionComponent,
     TransactionformComponent,
     TransactionlistComponent,
     AccountcomboComponent,
     TransactioncomboComponent,
     CreatecustomerComponent,
     CreateaccountComponent,
     CreatetransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CustomerService,AccountService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
