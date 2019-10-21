import { Injectable } from '@angular/core';
import { CounterStore } from '../stores/counter.store';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor(private counterStore: CounterStore) {}

  increment(): void {
    this.counterStore.update(state => ({
      value: state.value + 1
    }));
  }

  decrement(): void {
    this.counterStore.update(state => ({
      value: state.value - 1
    }));
  }

  reset(): void {
    this.counterStore.reset();
  }
}
