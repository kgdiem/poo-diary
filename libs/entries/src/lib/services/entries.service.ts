import { Injectable } from '@angular/core';
import { EntrySearch, Entry } from '@poodiary/api-interfaces';

@Injectable({ providedIn: 'root' })
export class EntriesService {
  constructor() {}

  query(): EntrySearch[] {
    return [];
  }

  get(): Entry {
    return null;
  }
}
