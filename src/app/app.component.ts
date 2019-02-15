import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todoArray = []
  todo;
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  data: any = {};

  constructor(private http: Http) {
    console.log("====HELLO=====");
    this.getArticles();
    this.getData();


  }
  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }
  getArticles() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data

    })

  }

  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value)
      console.log(value)
    } else {
      alert('Field required **')
    }
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
    console.log(todo)
  }

  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo)
    } else {
      alert('Field required **')
    }

  }

  updateItem(todo){

  }
  deleteItems(articles) {
    for (let i = 0; i <= this.data.length; i++) {
      if (articles == this.data[i]) {
        this.data.splice(i, 1)
      }
    }
    console.log(articles)
  }
}
