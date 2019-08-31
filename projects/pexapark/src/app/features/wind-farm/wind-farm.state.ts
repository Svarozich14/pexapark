import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.state';

import { HttpErrorResponse } from "@angular/common/http";
import { windFarmReducer } from "./wind-farm.reducer";

export const FEATURE_NAME = 'windFarm';
export const selectWindFarm = createFeatureSelector<State, WindFarmState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<WindFarmState> = {
  windFarmSelect: windFarmReducer,
};

export interface WindFarmState {
  windFarmSelect: WindFarmSelectState;
}

export interface WindFarmSelectState {
  windFarmName: string;
  loading: boolean;
  items?: number[];
  error?: HttpErrorResponse;
}

export interface State extends AppState {
  windFarm: WindFarmState;
}
