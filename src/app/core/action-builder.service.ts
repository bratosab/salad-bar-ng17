import { HttpErrorResponse } from '@angular/common/http';
import {
  ActionCreatorProps,
  createAction,
  props as ngProps,
} from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export class ActionBuilder {
  Load: any;
  Error: any;
  Success: any;

  constructor(reducer: string, type: string, props: ActionCreatorProps<any>) {
    this.Load = createAction(`${reducer}/load/${type}`);

    this.Error = createAction(
      `${reducer}/error/${type}`,
      ngProps<{ error: HttpErrorResponse }>()
    );

    this.Success = createAction(`${reducer}/error/${type}`, props);
  }
}
