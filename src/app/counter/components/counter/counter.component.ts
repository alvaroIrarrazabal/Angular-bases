import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter :number = 10;

 incraseBy():void{
  this.counter = this.counter +1;
}
 decreseBy():void{
  this.counter = this.counter -1;
}
 reset():void{
  this.counter = 10;
}

}
