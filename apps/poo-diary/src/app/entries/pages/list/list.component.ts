import { Component, OnInit } from '@angular/core';
import { EntriesFacade } from '@poodiary/entries';

@Component({
  selector: 'poodiary-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  entries$ = this.entries.entries$;

  constructor(private entries: EntriesFacade) {}

  ngOnInit(): void {
    this.entries.query();
  }
}
