import { createSelector } from '@ngrx/store';

import { selectWindFarm, WindFarmState } from './wind-farm.state';

export const selectWindFarmState = createSelector(
  selectWindFarm,
  (state: WindFarmState) => state.windFarmSelect
);

export const selectWindFarmProduction = createSelector(
  selectWindFarmState,
  state => state.items
);

export const selectWindFarmProductionItems = createSelector(
  selectWindFarmProduction,
  items => items
);
