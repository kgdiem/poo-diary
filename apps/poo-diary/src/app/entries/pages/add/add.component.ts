import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PooColor, PooType } from '@poodiary/api-interfaces';
import * as moment from 'moment';

@Component({
  selector: 'poodiary-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  public form = this.formBuilder.group({
    blood: [false, Validators.required],
    color: [PooColor, Validators.required],
    colorAlt: [''],
    constipated: [false, Validators.required],
    description: ['', Validators.required],
    image: [''],
    pain: [false, Validators.required],
    painScale: [0, Validators.required],
    dateTaken: [moment(), Validators.required],
    timeTaken: [moment(), Validators.required],
    type: [PooType.Cracked, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
