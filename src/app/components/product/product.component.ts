import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

// utiliser les observables
import {HttpClient} from '@angular/common/http';

// l'interface change pas le comportement
interface JSP {
  userID: string;
  id: string;
  title:string;
  completed: boolean
}

declare const genRandomNumbers :any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  todos: JSP[] = [];

  constructor(private http: HttpClient) {}
  // observable
  // A lifecycle hook that is called after Angular has initialized all 
  // data-bound properties of a directive. Define an ngOnInit() method to handle any additional initialization tasks.
  ngOnInit() {
      this.http.get<JSP[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        this.todos = data;
      })
  }
  showProduct :boolean=true;
  rNum = <[]>genRandomNumbers();
  page :number = 1;
  itemsTodisp :number = 10;

  pageChanged(event: number) {
    this.page = event;
  }

  // passer un param du parent au fils
  @Input() p_title : any;

  // passer data fils au parent
   
  @Output() c_newProductEvent = new EventEmitter<string>();
  addProduct(value:string){
    this.c_newProductEvent.emit(value);
  }


}
