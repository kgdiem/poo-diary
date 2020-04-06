import { Injectable } from '@angular/core';
import { EntriesService } from './entries.service';
import { EntryStore, EntrySearchStore } from '../store';
import { Entry } from '@poodiary/api-interfaces';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EntriesFacade {
  constructor(
    private entries: EntriesService,
    private state: EntryStore,
    private searchState: EntrySearchStore
  ) {}

  entries$ = this.searchState.stateChanged.pipe(map(res => res.entries));
  selected$ = this.state.stateChanged.pipe(map(res => res.entry));

  get(id: string | number) {
    this.entries.get(id).subscribe(res => {
      this.state.select(res);
    });

    return this.selected$;
  }

  query() {
    this.entries.query().subscribe(res => {
      this.searchState.add(res);
    });

    return this.entries$;
  }

  save(entry: Entry) {
    this.entries.save(entry).subscribe(res => {
      this.searchState.insert(res);
    });

    return this.entries$;
  }

  update(entry: Entry) {
    this.entries.update(entry).subscribe(res => {
      this.searchState.update(res);
    });

    return this.entries$;
  }
}
