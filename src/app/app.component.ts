import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name = "We're in the ROOT module";
  // constructor(private store: Store<any>) {

  // }

  // ngOnInit() {
  //   this.store.dispatch({type: 'test dispatch'})
  // }
}
