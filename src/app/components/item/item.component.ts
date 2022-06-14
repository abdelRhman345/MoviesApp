import { IMAGES_SIZES } from './../../constants/images-sizes';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null;

  imageSize = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
