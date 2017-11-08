import { Component } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  isUnchanged:boolean=false;
 /* For practice
  onChangeClick()
  {
    console.log("clicked me");
    this.isUnchanged=!this.isUnchanged;
    return false;
  }
  onClickChange()
  {
    console.log("I got triggered too");
  }
 
  myevent=new EventEmitter();
  this.myevent.emit() */
  name:string="santhosh";
  setUppercasename($event){
    if(name=="santhosh")
    {
    this.name="something";
    }
    else
    this.name="yogyaa";
  }
}
