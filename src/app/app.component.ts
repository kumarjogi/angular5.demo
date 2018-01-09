import {Component} from '@angular/core';

// Es 6 Module
// It is called decorator
@Component({
    selector:'app-root',
    template:`
    
    <h1>{{firstName}}</h1>
    <input type="text" [(ngModel)]="firstName"/>
    
    
    // <h1>{{2+3}} </h1>
    // <h1> {{'Sheldon' + ' Cooper'}}</h1>
    // <h1> {{myProp}}</h1>

    // {{firstName?"defind" : "undefind"}}


    <h1 [style.border]="myProp?'1px solid blue' : ''" [class.red]="myProp"> {{getName()}} </h1>

    

    <button [hidden]="getValue()"> click</button>
    <button (click)="onSave(12)"> Save</button>
    

    <select (change)="onChange()">
        <option> C</option>
        <option> C++</option>
        <option> Java</option>
    </select>

    

    `

})
export class AppComponent{
    myProp: string = "Angular App";
    //firstName: string = "Kumar";
    firstName:string = "";
    lastName: string = "Jogi";

    getValue(){
        return "Hello World";
    }

    getName(){
        return this.firstName+ " " +this.lastName;
    }

    onSave(param){
        console.log("Saved content", param);
    }

    onChange(){
        console.log("Value Changed");
    }
}

//Six types of data binding - Expressions, Property Binding, Event Binding, Class, Style and Two Way