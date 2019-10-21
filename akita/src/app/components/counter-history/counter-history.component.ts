import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterQuery } from 'src/app/queries/counter.query';

@Component({
  selector: 'app-counter-history',
  templateUrl: './counter-history.component.html',
  styles: []
})
export class CounterHistoryComponent implements OnInit {
  count$: Observable<number>;
  items: any[] = [];

  constructor(private counterQuery: CounterQuery) {}

  ngOnInit(): void {
    this.counterQuery.select().subscribe(state => {
      if (this.items.length > 20) {
        this.items.shift();
      }

      this.items.push(JSON.stringify(state));
    });
  }
}
