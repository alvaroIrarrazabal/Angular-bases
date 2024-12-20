import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = "Ironman"

  public age  : number = 37

get capitalizedName():string{
return this.name.toUpperCase();
}

getHeroDescriptions():string{

  return `${this.name} - ${this.age}`
}
change = true;

changeHero():void{
    this.name="Batman"


}


changeAge():void{

this.age = 38
}

}
