import { Injectable } from '@angular/core';
import { EntrySearch, Entry } from '@poodiary/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EntriesService {
  private entries: Entry[] = [];
  private idSequence = 0;

  constructor() {
    const serialized = localStorage.getItem('entries');

    const id = localStorage.getItem('idSequence');

    if (serialized) {
      this.entries = JSON.parse(serialized);
    }

    if (id) {
      this.idSequence = parseInt(id, 10);
    }
  }

  get(id: string | number): Observable<Entry> {
    return new Observable<Entry>(sub => {
      const entry = this.entries.find(e => e.id === id);

      sub.next(entry);
      sub.complete();
    });
  }

  query(): Observable<EntrySearch[]> {
    return new Observable<EntrySearch[]>(sub => {
      const entries: EntrySearch[] = this.entries.map(entry => ({
        createdAt: entry.createdAt,
        id: entry.id,
        summary: entry.description.slice(0, 20),
        takenAt: entry.takenAt,
        updatedAt: entry.updatedAt
      }));

      sub.next(entries);
      sub.complete();
    });
  }

  save(entry: Entry): Observable<Entry> {
    return new Observable<Entry>(sub => {
      entry.id = this.idSequence;

      this.idSequence++;

      this.entries.push(entry);

      localStorage.setItem('entries', JSON.stringify(this.entries));
      localStorage.setItem('idSequence', this.idSequence.toFixed());

      sub.next(entry);
      sub.complete();
    });
  }

  update(entry: Entry): Observable<Entry> {
    return new Observable<Entry>(sub => {
      const index = this.entries.findIndex(e => e.id === entry.id);

      this.entries.splice(index, 1, entry);

      localStorage.setItem('entries', JSON.stringify(this.entries));

      sub.next(entry);
      sub.complete();
    });
  }
}
