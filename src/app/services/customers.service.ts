import { Observable } from "rxjs";
import { Records } from "../model/customer.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 @Injectable({
    providedIn:"root"
})
export class customersService{
    constructor(private http:HttpClient){}
    getCustomers():Observable<Records>{
        // connect to server 
        return this.http.get<Records>("https://www.w3schools.com/angular/customers.php");
    };
};
