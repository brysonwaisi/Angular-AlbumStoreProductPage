import { Component, Injectable, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {album} from '../album';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})

export class ProductDescriptionComponent implements OnInit {
  albumInfo: album;

  constructor(private _productService) { }

  ngOnInit() {
  }
  this._productService.getAlbum(1).subscribe(response => this.albumInfo = response)

}
