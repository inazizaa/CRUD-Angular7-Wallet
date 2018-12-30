import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
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
// import { CobacomboComponent } from './shared/cobacombo/cobacombo.component';
import { AccountcomboComponent } from './shared/combobox/account/accountcombo.component';
import { TransactioncomboComponent } from './shared/combobox/transaction/transactioncombo.component';

@NgModule({
  declarations: [ 
    AppComponent,
    CustomerComponent,
    CustomerformComponent,
    CustomerlistComponent,
     AccountComponent,
     AccountformComponent,
     AccountlistComponent,
     TransactionComponent,
     TransactionformComponent,
     TransactionlistComponent,
    //  CobacomboComponent,
     AccountcomboComponent,
     TransactioncomboComponent
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
