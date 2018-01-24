import { Component } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ProductService } from "../shared/product.service";


@Component({
    selector:'app-new-product',
    template:`
    <div *ngIf="failed" class="alert alert-danger">Failed to save please try again</div>
    <div *ngIf="success" class="alert alert-success">Successfuly saved</div>
    <form [formGroup]="frm">
        <div class="col-md-5">
            <div class="form-group">
                <input type="text" placeholder="Brand" formControlName="brand" class="form-control" />
                <span *ngIf="frm.controls.brand.dirty && frm.controls.brand.invalid" class="text-danger">Required</span>  
            </div>
            <div class="form-group">
                <input type="text" placeholder="Model" formControlName="model" class="form-control" />
                <span *ngIf="frm.controls.model.dirty && frm.controls.model.errors?.required" class="text-danger">Required</span>
                <span *ngIf="frm.controls.model.dirty && frm.controls.model.errors?.minlength" class="text-danger">Min 3 char</span>
                <span *ngIf="frm.controls.model.dirty && frm.controls.model.errors?.maxlength" class="text-danger">Max 10 char</span>    
            </div>
            <div class="form-group">
                <input type="text" placeholder="Price" formControlName="price" class="form-control" />
                <span *ngIf="frm.controls.price.errors?.pattern" class="text-danger">Invalid Price</span>    
            </div>
            <div class="form-group">
                InStock:
                <input type="checkbox" checked formControlName="inStock" />
            </div>
            <div class="form-group">
                <button [disabled]="frm.invalid" (click)="onSave()" class="btn btn-success">Save Product</button>
            </div>
        </div>
</form>`
})

export class NewProductComponent{
    frm:FormGroup;
    success:boolean;
    failed:boolean;

    constructor(private productSvc:ProductService, private fb:FormBuilder){

        this.frm = fb.group({
            brand:['', [Validators.required]],
            model:['',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            price:['',[Validators.pattern("[0-9]{3}")]],
            inStock:[]
        })

    }

    onSave(){   
        if(this.frm.valid){   
            this.productSvc.save(this.frm.value)
        .subscribe(           
            ()=>{
                this.success = true;
                this.frm.reset();
                },
            ()=>this.failed = true
        );
    
        }
        else{
            console.log("Validation Failed");
        }
    }

}

