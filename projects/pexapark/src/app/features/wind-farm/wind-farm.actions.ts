import { createAction, props } from '@ngrx/store';

import { HttpErrorResponse } from "@angular/common/http";

export const actionWindFarmChanged = createAction(
  '[WindFarm] Changed',
  props<{ windFarmName: string }>()
);

export const actionWindFarmProductionRetrieve = createAction(
  '[WindFarm] Retrieve',
  props<{ windFarmName: string }>()
);

export const actionWindFarmProductionRetrieveSuccess = createAction(
  '[WindFarm] Retrieve Success',
  props<{ items: number[] }>()
);

export const actionWindFarmProductionRetrieveError = createAction(
  '[WindFarm] Retrieve Error',
  props<{ error: HttpErrorResponse }>()
);
