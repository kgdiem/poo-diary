import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  PooColor,
  PooColors,
  PooType,
  PooTypes
} from '@poodiary/api-interfaces';
import * as moment from 'moment';
import { EntriesFacade } from '@poodiary/entries';
import { Router } from '@angular/router';

@Component({
  selector: 'poodiary-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  public colors = PooColors;
  public types = PooTypes;

  public form = this.formBuilder.group({
    blood: [false, Validators.required],
    color: [PooColor.Brown, Validators.required],
    colorAlt: [''],
    constipated: [false, Validators.required],
    description: ['', Validators.required],
    image: [''],
    pain: [false, Validators.required],
    painScale: [0, Validators.required],
    dateTaken: [moment(), Validators.required],
    timeTaken: [moment().format('h:mm a'), Validators.required],
    type: [PooType.Cracked, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private entries: EntriesFacade,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    this.entries
      .save(this.form.value)
      .subscribe(() => this.router.navigate(['/entries']));
  }
}
