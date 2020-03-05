import { Component, OnInit } from '@angular/core';
import { Categories } from './Categories';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: [ './first-component.component.scss' ]
})
export class FirstComponentComponent implements OnInit {
  name: string;
  description: string;
  price: number | undefined;
  category: Categories | undefined;
  isAvailable: boolean | undefined;
  selectedValues: Array<number>;

  constructor() {
    this.name = 'First Component Name';
    this.selectedValues = [ 1, 2, 3, 4 ];
    this.description = 'First Component Description';
  }

  ngOnInit(): void {
  }

}
