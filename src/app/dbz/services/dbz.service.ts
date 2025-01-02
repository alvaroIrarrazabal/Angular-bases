import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../interface/character.interface';


@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }



  public characters : Character[] = [
    {
      id: uuid(),
      name : 'Krillin',
      power: 1000
    },
    {
      id: uuid(),

      name : 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name : 'Goten',
      power: 1000
    },
    {
      id: uuid(),

      name : 'Trunks',
      power: 10000
    }
  ];

  addCharacter(character : Character):void{

  const newCharacter: Character = {id : uuid(), ...character}

    this.characters.push(newCharacter);

  }

 // onDeleteCharacter(index:number):void{
  //  this.characters.splice(index,1)

 // }

 deleteCharacterById(id: string){
  this.characters = this.characters.filter(character => character.id !== id);

 }

}
