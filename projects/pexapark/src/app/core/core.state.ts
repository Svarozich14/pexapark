import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from './router/router.state';

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const selectRouterState = createFeatureSelector<AppState,
  RouterReducerState<RouterStateUrl>>('router');

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}
