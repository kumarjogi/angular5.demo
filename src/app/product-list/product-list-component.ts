import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.html'
})
export class ProductListComponent{
    frm:FormGroup;
    products:any[];
    failed:boolean;
    success:boolean;
    // product: any={};

    // brand;
    // model;
    // price;
    // inStock

    //_productSvc: ProductService;

    constructor(private productSvc:ProductService, private fb:FormBuilder){

        this.frm = fb.group({
            brand:['', [Validators.required]],
            model:['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            price:['',[Validators.pattern("[0-9]{3}")]],
            inStock:[]
        })

        //this._productSvc = productSvc;
        //let productSvc = new ProductService();
        this.get();
    }

    // Refactoring
    get(){
        //this.product = {};
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

        // console.log(this.frm.value)
        // this.productSvc.save(this.product)

        if(this.frm.valid){

            this.productSvc.save(this.frm.value)
        .subscribe(
            // ()=>console.log("Successfully Saved"),
            ()=>{this.success = true;
                this.frm.reset();
                 this.get()
                },
            ()=>this.failed = true
            // ()=>console.log("Failed")
        );

        }
        else{
            console.log("Validation Failed");
        }
    }
}