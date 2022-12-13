import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {
  customerName:string = 'mnr';
  email:string;
  password:string;

constructor (private http:HttpClient) {}
onSubmit(form: NgForm) {
  // console.log(form.value);
  this.http.post("http://localhost:3000/customers", form.value).subscribe();
}

// deleteDocument() {
//   // console.log(form.value);
//   this.http.delete("http://localhost:3000/customers/1").subscribe();
// }

ngOnInit(): void {
    
}
}
