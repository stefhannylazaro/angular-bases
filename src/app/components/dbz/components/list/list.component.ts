import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // Con ! podemos omitir la alerta de inicialización
  @Input({required: true}) public characterList!: Character[];
  @Output() public onDeleteById:EventEmitter<string> = new EventEmitter;

  deleteCharacter(id?:string):void {
    if(!id) return;
    this.onDeleteById.emit(id);
  }
}
