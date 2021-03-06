import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {

  @Input() rating!: number;
  cropWidth: number = 120;

  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 120 / 5;
  }

}
