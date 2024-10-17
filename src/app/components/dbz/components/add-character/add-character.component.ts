import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {
    // debugger;
    // al poner {...this.character} dentro del metodo emit() con llaves y ... lo que se esta haciendo es crear un objeto copia de this.character
    // {...this.character} // simplifica let copiaCharacter=Object.assign({},character)
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit({...this.character});
    this.character = { name:'', power: 0}
  }
}
