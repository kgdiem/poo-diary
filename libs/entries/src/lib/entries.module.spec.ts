import { async, TestBed } from '@angular/core/testing';
import { EntriesModule } from './entries.module';

describe('EntriesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EntriesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EntriesModule).toBeDefined();
  });
});
