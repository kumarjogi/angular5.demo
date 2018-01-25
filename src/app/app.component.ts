import {Component} from '@angular/core';

// Es 6 Module
// It is called decorator
@Component({
    selector:'app-root',
    template:`

    <app-header> </app-header>
    <div class="container">
        <router-outlet> </router-outlet>
    </div>
    <app-footer> </app-footer>

    `

})
export class AppComponent{

    constructor(){
        
    }
}
