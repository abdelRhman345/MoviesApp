import { Item } from './../item/item';
import { TvShows } from './../../models/tvs';
import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
