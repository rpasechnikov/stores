import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
import { CounterQuery } from 'src/app/queries/counter.query';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private counterService: CounterService, private counterQuery: CounterQuery) {}

  ngOnInit(): void {
    this.count$ = this.counterQuery.select(state => state.value);
  }

  reset(): void {
    this.counterService.reset();
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }
}
