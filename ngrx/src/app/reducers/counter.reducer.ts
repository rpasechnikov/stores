import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset } from '../actions';

export const initialValue = 0;

const _counterReducer = createReducer(
  initialValue,
  on(increment, currentValue => currentValue + 1),
  on(decrement, currentValue => currentValue - 1),
  on(reset, _ => 0)
);

/**
 * Reducer function to perform an action specified with the currentValue provided
 * @param currentValue the current value of the counter
 * @param action the counter action to perform
 * @returns the new counter value
 */
export function counterReducer(currentValue: number, action: Action): number {
  return _counterReducer(currentValue, action);
}
