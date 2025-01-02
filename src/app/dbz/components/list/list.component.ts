import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
public charactersList : Character[] = [
  {
    name : 'Krillin',
    power: 1000
  }
];

@Output()
public onDelete : EventEmitter<string> = new EventEmitter();

onDeleteItem(id? : string):void{
  if(!id) return; 

this.onDelete.emit(id );
console.log("se elimino ",id )

}

}
