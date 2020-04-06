import { Injectable } from '@angular/core';
import { EntriesService } from './entries.service';
import { EntryState, EntrySearchState } from '../store';

@Injectable({ providedIn: 'root' })
export class EntriesFacade {
  constructor(
    private entries: EntriesService,
    private state: EntryState,
    private searchState: EntrySearchState
  ) {}
}
