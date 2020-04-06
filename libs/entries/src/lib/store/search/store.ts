import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { EntrySearchStateModel } from './model';
import { EntrySearch, Entry } from '@poodiary/api-interfaces';
import { EntrySearchActions } from './actions';

@Injectable({ providedIn: 'root' })
export class EntrySearchStore extends ObservableStore<EntrySearchStateModel> {
  constructor() {
    super({ trackStateHistory: true });
  }

  add(entries: EntrySearch[]) {
    this.setState({ entries }, EntrySearchActions.Add);
  }

  delete(entry: Entry) {
    const { entries } = this.getState();

    const updated = [...entries];

    const index = entries.findIndex(e => e.id === entry.id);

    updated.splice(index, 1);

    this.setState({ entries: updated }, EntrySearchActions.Delete);
  }

  update(entry: Entry) {
    const { entries } = this.getState();

    const updated = [...entries];

    const index = entries.findIndex(e => e.id === entry.id);

    const entrySearch: EntrySearch = {
      summary: entry.description.slice(0, 20),
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
      takenAt: entry.takenAt,
      id: entry.id
    };

    updated.splice(index, 1, entrySearch);

    this.setState({ entries: updated }, EntrySearchActions.Update);
  }

  insert(entry: Entry) {
    const { entries } = this.getState();

    const updated = [...entries];

    const entrySearch: EntrySearch = {
      summary: entry.description.slice(0, 20),
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
      takenAt: entry.takenAt,
      id: entry.id
    };

    updated.unshift(entrySearch);

    this.setState({ entries: updated }, EntrySearchActions.Insert);
  }
}
