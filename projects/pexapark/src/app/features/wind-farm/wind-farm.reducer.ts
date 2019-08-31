import { Action, createReducer, on } from '@ngrx/store';
import * as windFarmSelect from './wind-farm.actions';
import { WindFarmSelectState } from './wind-farm.state';

export const initialState: WindFarmSelectState = {
  windFarmName: 'windFarm1',
  loading: false,
  items: [],
};

const reducer = createReducer(
  initialState,
  on(windFarmSelect.actionWindFarmProductionRetrieve, (state, {windFarmName}) => ({
    ...state,
    loading: true,
    error: null,
    windFarmName
  })),
  on(windFarmSelect.actionWindFarmProductionRetrieveSuccess, (state, {items}) => ({
    ...state,
    loading: false,
    items,
    error: null,
  })),
  on(windFarmSelect.actionWindFarmProductionRetrieveError, (state, {error}) => ({
    ...state,
    loading: false,
    items: [],
    error
  })),
  on(windFarmSelect.actionWindFarmChanged, (state, {windFarmName}) => ({
    ...state,
    items: [],
    windFarmName
  })),
);

export function windFarmReducer(
  state: WindFarmSelectState | undefined,
  action: Action
) {
  return reducer(state, action);
}
