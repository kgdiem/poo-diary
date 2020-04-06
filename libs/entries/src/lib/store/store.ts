import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { EntryStateModel } from './model';
import { Entry } from '@poodiary/api-interfaces';
import { EntryActions } from './actions';

@Injectable({ providedIn: 'root' })
export class EntryStore extends ObservableStore<EntryStateModel> {
  constructor() {
    super({ trackStateHistory: true });
  }

  select(entry: Entry) {
    this.setState({ entry }, EntryActions.Select);
  }
}
