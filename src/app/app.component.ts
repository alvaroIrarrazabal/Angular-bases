import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Primeras bases de angular';
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

