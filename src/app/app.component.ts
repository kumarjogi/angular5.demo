import {Component} from '@angular/core';

// Es 6 Module
// It is called decorator
@Component({
    selector:'app-root',
    template:` <app-product-list> </app-product-list>`

})
export class AppComponent{

    constructor(){
        
    }
}
