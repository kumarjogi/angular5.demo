import {Component} from '@angular/core';

// Es 6 Module
// It is called decorator
@Component({
    selector:'app-root',
    template:'<h1>Hello Angular!!!</h1> <app-home> </app-home>'

})
export class AppComponent{}