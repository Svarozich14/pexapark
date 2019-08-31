import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as windFarmSelectAction from "../wind-farm.actions";
import { State } from "../wind-farm.state";

@Component({
  selector: 'pp-wind-farm-select',
  templateUrl: './wind-farm-select.component.html',
  styleUrls: ['./wind-farm-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WindFarmSelectComponent implements OnInit {
  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  windFarmChanged(newValue) {
    if (newValue) this.store.dispatch(windFarmSelectAction.actionWindFarmChanged({windFarmName: newValue}));
  }
}
