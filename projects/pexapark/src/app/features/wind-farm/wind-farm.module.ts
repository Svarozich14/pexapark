import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FEATURE_NAME, reducers } from './wind-farm.state';
import { WindFarmsRoutingModule } from './wind-farm-routing.module';
import { WindFarmService } from "./wind-farm.service";
import { WindFarmEffects } from "./wind-farm.effects";
import { WindFarmComponent } from "./wind-farm/wind-farm.component";
import { WindFarmTableComponent } from "./wind-farm-table/wind-farm-table.component";
import { WindFarmChartComponent } from "./wind-farm-chart/wind-farm-chart.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    WindFarmsRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([
      WindFarmEffects,
    ]),
    SharedModule
  ],
  declarations: [
    WindFarmComponent,
    WindFarmChartComponent,
    WindFarmTableComponent,
  ],
  providers: [WindFarmService]
})
export class WindFarmModule {
  constructor() {
  }
}
