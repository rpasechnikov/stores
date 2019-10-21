import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/app/actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  /**
   * Ctor
   * @param store store providing numeric values. TODO: what does the 'test' naming do? Does not seem to affect anything...
   */
  constructor(private store: Store<{ test: number }>) {}

  ngOnInit(): void {
    // Getting all 'count' values from the provided store. TODO: where is this 'count' naming coming from????
    this.count$ = this.store.pipe(select('count'));

    this.store.subscribe(x => {
      console.log('>>> store got: ', x);
    });
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }
}
