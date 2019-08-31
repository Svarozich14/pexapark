import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable, Subscription } from "rxjs";
import { State, WindFarmSelectState } from "../wind-farm.state";
import { select, Store } from "@ngrx/store";
import { WindFarmService } from "../wind-farm.service";
import { selectWindFarmState } from "../wind-farm.selectors";
import { MonthData } from "../wind-farm/wind-farm.model";
import { filter } from "rxjs/operators";

@Component({
  selector: 'pp-wind-farm',
  templateUrl: './wind-farm-chart.component.html',
  styleUrls: ['./wind-farm-chart.component.scss'],
})
export class WindFarmChartComponent implements OnInit, OnDestroy {
  windFarmState$: Observable<WindFarmSelectState>;
  dataSource: MonthData[];
  subscription: Subscription;
  categories: string[];
  budget: number[];
  realized: (number | string)[];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = {};
  updateChart: boolean = false;

  constructor(private store: Store<State>, private service: WindFarmService) {
  }

  ngOnInit() {
    this.windFarmState$ = this.store.pipe(select(selectWindFarmState));
    this.subscription = this.windFarmState$
      .pipe(
        filter(state => state.items.length > 0),
      )
      .subscribe(state => {
        this.dataSource = this.service.buildBudgetData(state.items, state.windFarmName);
        this.categories = this.dataSource.map(month => month.month);
        this.budget = this.dataSource.map(month => month.budget);
        this.realized = this.dataSource.map(month => month.realized);
        this.chartOptions = {
          chart: {
            type: "column"
          },
          title: {
            text: "Budget PSO"
          },
          subtitle: {
            text: ""
          },
          xAxis: {
            categories: this.categories,
          },
          yAxis: {
            min: 25000
          },
          tooltip: {
            enabled: false
          },
          series: [
            {
              type: 'column',
              name: 'Budget',
              data: this.budget,
              color: 'green',
            },
            {
              type: 'column',
              name: 'Realized',
              data: this.realized,
              color: 'blue',
            }
          ]
        }
      });
    this.updateChart = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
