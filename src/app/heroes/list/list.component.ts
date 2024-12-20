import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroesName: string[]= ['Alvaro','Spiderman','Hulk','she Hulk','Ironman']
public deletedHero? : string;
 
delatelastHero():void{

if(this.heroesName.length > 0){

  this.deletedHero = this.heroesName.pop();
}
}

}
