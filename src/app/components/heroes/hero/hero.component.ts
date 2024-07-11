import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name = 'iroman';
  public age: number = 29;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 20;
  }

  verify():void {
    // al hacer esto con js rompe la reactividad de angular y el nombre del hero siempre será ABCD
    document.querySelectorAll('h1').forEach(element => {
      element.innerHTML = "ABCD";
    });
  }
}
