import { Query } from '@datorama/akita';
import { CounterState, CounterStore } from '../stores/counter.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<CounterState> {
  constructor(protected store: CounterStore) {
    super(store);
  }
}
