import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { CustomerformComponent } from '../form/customerform.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  @ViewChild('formCustomer')
  formCustomer: CustomerformComponent;

  listCustomer: Customer[] = [];
  showDetail: boolean = false;
  selectedCustomer: Customer = new Customer();

  constructor(private customerService: CustomerService, private route : Router) { }

  ngOnInit() {
    this.loadData();
  }
  selectCustomer(customer: Customer){
    let copyCustomer = new Customer(); //let hanya berlaku di satu blok, car adalah variabel global
    copyCustomer.customerNumber = customer.customerNumber;
    copyCustomer.firstName = customer.firstName;
    copyCustomer.lastName = customer.lastName;
    copyCustomer.birthDate = customer.birthDate;
    copyCustomer.username = customer.username;
    copyCustomer.password = customer.password;
    copyCustomer.phoneNumber = customer.phoneNumber;
    copyCustomer.phoneType = customer.phoneType;
    this.selectedCustomer = copyCustomer;
    this.showDetail = true;
    this.formCustomer.updateData();

  }

  loadData(){
    this.customerService.getList().subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        Object.assign(this.listCustomer, response.values);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }

show(customer : Customer){
 this.route.navigate(['/accountlist', {customerNumber : customer.customerNumber}])
}

  delete(customerNumber){
    console.log("customerNumber:"+customerNumber);
    this.customerService.delete(customerNumber).subscribe(
      (response)=>{
        // console.log(JSON.stringify(response));
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
