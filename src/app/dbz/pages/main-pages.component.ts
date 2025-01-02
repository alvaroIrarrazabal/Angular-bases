import { Character } from './../interface/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.css'
})
export class MainPagesComponent {

constructor( private dbzService:DbzService){}


get character(): Character[]{
  return [...this.dbzService.characters]
}

onDeleteCharacter(id: string):void{
this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character: Character):void{
  this.dbzService.addCharacter(character)

}




}
