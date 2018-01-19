import {Component} from '@angular/core';

// Es 6 Module
// It is called decorator
@Component({
    selector:'app-root',
    template:` <app-users> </app-users>`

})
export class AppComponent{

    constructor(){
        var url = "https://api.github.com/users";
    }
}
