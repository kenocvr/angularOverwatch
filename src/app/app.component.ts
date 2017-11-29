import { Component } from '@angular/core';



export class Character {
  name: string;
  type: string;  // type: tank, healer, dps, etc
  abilities: any;
  damage: string;
  image: string;
}

function characterCreate(name, type, abilities, damage, image) {
  this.name = name;
  this.type = type;
  this.abilities = abilities;
  this.damage = damage;
  this.image = image;
}


let mercy = new characterCreate('Mercy', 'Healer','heal','99', 'https://i.pinimg.com/474x/a5/02/4e/a5024e9bef07692573fa67b7e8834586--overwatch-mercy-character-names.jpg');

const CHARACTERS: Character[] = [
  {
    name: 'Mercy',
    type: 'Healer',
    abilities: ['heal', 'damage boost'],
    damage: '99',
    image: "https://i.pinimg.com/474x/a5/02/4e/a5024e9bef07692573fa67b7e8834586--overwatch-mercy-character-names.jpg"
  },
  {
    name: 'Genji',
    type: 'Dps',
    abilities: ['heal', 'damage boost'],
    damage: '99',
    image: "https://www.pcinvasion.com/wp-content/uploads/2016/06/genji-profile-icon.png"
  },
  {
    name: 'Lucio',
    type: 'Healer',
    abilities: [

        {
          abName: 'Wall Ride',
          description: `Can ride along a wall
          Jump onto a wall to ride along it.`
        }
      ,

        {
          abName: 'Healing Boost',
          description: `Heals nearby teammates.`
        }

    ],
    damage: '99',
    image: "http://www.lastpick.net/assets/heroes/Lucio.png"
  },
  {
    name: 'Bastion',
    type: 'Dps',
    abilities: ['heal', 'damage boost'],
    damage: '99',
    image: "http://www.lastpick.net/assets/heroes/Bastion.png"
  },
  {
    name: 'Ana',
    type: 'Healer',
    abilities: ['heal', 'damage boost'],
    damage: '99',
    image: "http://www.lastpick.net/assets/heroes/Ana.png"
  },
  {
    name: 'Zarya',
    type: 'Tank',
    abilities: ['heal', 'damage boost'],
    damage: '99',
    image: "http://www.lastpick.net/assets/heroes/Zarya.png"
  }
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters = CHARACTERS;


  
  selectedCharacter: Character;


  onSelect(character: Character): void {
    this.selectedCharacter = character;

  }
}
