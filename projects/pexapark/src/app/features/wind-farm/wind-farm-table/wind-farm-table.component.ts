import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { selectWindFarmState } from "../wind-farm.selectors";
import { State, WindFarmSelectState } from "../wind-farm.state";
import { Observable, Subscription } from "rxjs";
import { WindFarmService } from '../wind-farm.service';
import { MonthData } from "../wind-farm/wind-farm.model";
import { filter } from "rxjs/operators";

@Component({
  selector: 'pp-wind-farm',
  templateUrl: './wind-farm-table.component.html',
  styleUrls: ['./wind-farm-table.component.scss'],
})
export class WindFarmTableComponent implements OnInit, OnDestroy {
  dataSource: MonthData[];
  windFarmState$: Observable<WindFarmSelectState>;
  subscription: Subscription;
  displayedColumns: string[] = ['month', 'budget', 'realized'];

  constructor(private store: Store<State>, private service: WindFarmService) {
  }

  ngOnInit() {
    this.windFarmState$ = this.store.pipe(select(selectWindFarmState));
    this.subscription = this.windFarmState$
      .pipe(
        filter(state => state.items.length > 0)
      )
      .subscribe(state => {
        this.dataSource = this.service.buildBudgetData(state.items, state.windFarmName);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
