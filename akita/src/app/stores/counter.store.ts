import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface CounterState {
  value: number;
}

export function createInitialState(): CounterState {
  return {
    value: 0
  };
}

/**
 * The Store is a single object which contains the store state and serves as the "single source of truth."
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counter', resettable: true })
export class CounterStore extends Store<CounterState> {
  constructor() {
    super(createInitialState());
  }
}
