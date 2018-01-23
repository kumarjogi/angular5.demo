import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent{
    products:any[];
    failed:boolean;
    success:boolean;
    product: any={};

    // brand;
    // model;
    // price;
    // inStock

    //_productSvc: ProductService;

    constructor(private productSvc:ProductService){

        //this._productSvc = productSvc;
        //let productSvc = new ProductService();
        this.get();
    }

    // Refactoring
    get(){
        this.product = {};
        this.productSvc.get()
        .subscribe(
            res => this.products = (res["data"]),
            err => console.log(err)
        )
    }

    onSave(){

        // let obj = {
        //     brand: this.brand,
        //     model: this.model,
        //     price: this.price,
        //     inStock: this.inStock
        // };
        //console.log(obj);

        //console.log(this.product);

        //this._productSvc.save(this.product)

        
        this.productSvc.save(this.product)
        .subscribe(
            // ()=>console.log("Successfully Saved"),
            ()=>{this.success = true;
                 this.get()
                },
            ()=>this.failed = true
            // ()=>console.log("Failed")
        );
    }
}