import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `

  <div class="panel panel-primary"> 
    <div class="panel-heading">
      <h1>{{product.brand}} {{product.model}} </h1>
    </div>
    <div class="panel-body">
    Price: {{product.price | currency}}
    <div>{{product.lastUpdated | time}} </div>
    </div>
  </div>
  `,
  styles: []
})
export class ProductDetailComponent {

  product = {};

  constructor(private productSvc:ProductService, private route:ActivatedRoute) {
    let id = this.route.snapshot.params.id;
    this.productSvc.getById(id)
    .subscribe(
      (res) => this.product = res,
      (err) => console.log(err)
    )
  }

 
}
