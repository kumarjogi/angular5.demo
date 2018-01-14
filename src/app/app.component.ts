import {Component} from '@angular/core';

// Es 6 Module
// It is called decorator
@Component({
    selector:'app-root',
    template:`
    
    
    <h1 [ngClass] = "'cls'" *ngIf="myProp">
    <div>
        <div> </div>
    </div>
    {{firstName}}
    </h1>

    <ul>
        <li *ngFor = "let val of arr">{{val}} </li>
    </ul>

    <table border="1">
        <tr>
            <td>value </td>
            <td>index </td>
            <td>even </td>
            <td>odd </td>
            <td>first </td>
            <td>last </td>
        </tr>
        <tr *ngFor = "let val of arr; let idx = index; let evn = even; let odd = odd; let fst = first; let lst = last" >
            <td>{{val}} </td>
            <td>{{idx}} </td>
            <td>{{evn}} </td>
            <td>{{odd}} </td>
            <td>{{fst}} </td>
            <td>{{lst}} </td>
        </tr>
    </table>

    <input type="text" [(ngModel)]="firstName"/>
    
    
    // <h1>{{2+3}} </h1>
    // <h1> {{'Sheldon' + ' Cooper'}}</h1>
    // <h1> {{myProp}}</h1>

    // {{firstName?"defind" : "undefind"}}


    <h1 [style.border]="myProp?'1px solid blue' : ''" [class.red]="myProp"> {{getName()}} </h1>

    

    <button [hidden]="getValue()"> click</button>
    //<button (click)="onSave(12)"> Save</button><br>

    <button (click)="toggle()"> Save</button>
    

    <select (change)="onChange()">
        <option> C</option>
        <option> C++</option>
        <option> Java</option>
    </select>

    <div [ngSwitch] = "priority">
        <h1 *ngSwitchCase="'Low'">Low Priority </h1>
        <h1 *ngSwitchCase="'Medium'">Medium Priority </h1>
        <h1 *ngSwitchCase="'High'">High Priority </h1>
        <h1 *ngSwitchDefault>Very Low Priority </h1>
    </div>
    

    `

})
export class AppComponent{

    
    //myProp: string = "Angular App";
    myProp: boolean = false;
    //myProp: any = "abc";
    cls = ["fg","bg"];
    firstName: string = "Kumar";
    //firstName:string = "";
    lastName: string = "Jogi";
    arr:number[] = [1,2,3,4];
    priority: string = "Low";


    getValue(){
        return "Hello World";
    }

    getName(){
        return this.firstName+ " " +this.lastName;
    }

    onSave(param){
        console.log("Saved content", param);
    }

    toggle(){
        let x=10;

        this.myProp = !this.myProp;
        //this.myProp = this.myProp ? false : true;
        //if(this.myProp) this.myProp = false;
        //if(this.myProp == false) this.myProp = true;
        //else this.myProp =  true;
    }

    onChange(){
        console.log("Value Changed");
    }
}

//Six types of data binding - Expressions, Property Binding, Event Binding, Class, Style and Two Way