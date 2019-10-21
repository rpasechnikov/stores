import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-counter-history',
  templateUrl: './counter-history.component.html',
  styles: []
})
export class CounterHistoryComponent implements OnInit {
  count$: Observable<number>;
  items: any[] = [];

  constructor(private store: Store<{ test: number }>) {}

  ngOnInit(): void {
    this.store.subscribe(x => {
      if (this.items.length > 20) {
        this.items.shift();
      }

      this.items.push(JSON.stringify(x));
    });
  }
}
