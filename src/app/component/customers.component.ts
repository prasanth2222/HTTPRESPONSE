import { Component } from "@angular/core";
import { customersService } from "../services/customers.service";
import { HttpErrorResponse } from '@angular/common/http'; 
import { customers } from '../model/customer.model'

@Component({
    selector:"customers",
    templateUrl:"./customers.component.html"
})
export class customersComponent{
    response:customers[];
    constructor(private service:customersService){}
    ngOnInit(){
        this.service.getCustomers().subscribe((posRes)=>{
            this.response = posRes.records;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};
