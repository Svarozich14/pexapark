import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

import { LocalStorageService } from '../../core/core.module';

import { State } from './wind-farm.state';
import * as windFarmSelectAction from './wind-farm.actions';
import { WindFarmService } from "./wind-farm.service";

@Injectable()
export class WindFarmEffects {

  retrieveStock = createEffect(() =>
      this.actions$.pipe(
        ofType(windFarmSelectAction.actionWindFarmChanged),
        tap((action) => this.localStorageService.setItem('WINDFARM', action.windFarmName)),
        debounceTime(1000),
        switchMap((action) => {
          return this.service.retrieveWindFarmSelect(action.windFarmName)
            .pipe(
              tap((resp) => {
                  this.store.dispatch(windFarmSelectAction.actionWindFarmProductionRetrieveSuccess({items: resp.result}));
                },
              )
            )
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private localStorageService: LocalStorageService,
    private service: WindFarmService
  ) {
  }

}
