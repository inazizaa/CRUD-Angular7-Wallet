import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {
  // @Input()
  // customer: Customer;

  @Output()
  result = new EventEmitter();

  customercreateForm: FormGroup;
  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customercreateForm = this.formBuilder.group({
      customerNumber:[''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      username: [''],
      password: [''],
      phoneNumber: ['', Validators.required],
      phoneType: ['', Validators.required]
    });
  }

  // updateData(){
  //      this.setDataToForm(this.customer);
  //    }

  // setDataToForm(customer){
  //   if(customer){
  //     this.customercreateForm.controls['customerNumber'].setValue(this.customer.customerNumber);
  //     this.customercreateForm.controls['firstName'].setValue(this.customer.firstName);
  //     this.customercreateForm.controls['lastName'].setValue(this.customer.lastName);
  //     this.customercreateForm.controls['birthDate'].setValue(this.customer.birthDate);
  //     this.customercreateForm.controls['username'].setValue(this.customer.username);
  //     this.customercreateForm.controls['password'].setValue(this.customer.password);
  //     this.customercreateForm.controls['phoneNumber'].setValue(this.customer.phoneNumber);
  //     this.customercreateForm.controls['phoneType'].setValue(this.customer.phoneType);
  //   }
  // }

  insertData(){
    let customer: Customer = new Customer();
    customer.customerNumber = this.customercreateForm.controls['customerNumber'].value;
    customer.firstName = this.customercreateForm.controls['firstName'].value;
    customer.lastName = this.customercreateForm.controls['lastName'].value;
    customer.birthDate = this.customercreateForm.controls['birthDate'].value;
    customer.username = this.customercreateForm.controls['username'].value;
    customer.password = this.customercreateForm.controls['password'].value;
    customer.phoneNumber = this.customercreateForm.controls['phoneNumber'].value;
    customer.phoneType = this.customercreateForm.controls['phoneType'].value;
    
    this.customerService.insert(customer).subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        this.result.emit(true);
    },(err)=>{
      alert('error '+JSON.stringify(err));
    }
    );
  }
  cancelChanges(){
    location.href="./customerlist";
  }
}
