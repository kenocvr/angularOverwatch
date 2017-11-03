import { Component } from '@angular/core';


// Overwatch character type is the character class
// Winston is a tank class. So we call it tank type
// to avoid confusion with TS class nomenclature
export class Character {
  name: string;
  type: string;  // type: tank, healer, dps, etc
  abilities: any;
  image: string;
}

export class CharacterStats {
  name: string;
  abilities: any;
  damage: string;
}


const CHARACTERS: Character[] = [
  {
    name: 'Mercy',
    type: 'Healer',
    abilities: ['heal', 'damage boost'],
    image: "https://i.pinimg.com/474x/a5/02/4e/a5024e9bef07692573fa67b7e8834586--overwatch-mercy-character-names.jpg"
  },
  {
    name: 'Genji',
    type: 'Dps',
    abilities: ['heal', 'damage boost'],
    image: "https://www.pcinvasion.com/wp-content/uploads/2016/06/genji-profile-icon.png"
  },
  {
    name: 'Lucio',
    type: 'Healer',
    abilities: ['heal', 'damage boost'],
    image: "http://www.lastpick.net/assets/heroes/Lucio.png"
  },
  {
    name: 'Bastion',
    type: 'Dps',
    abilities: ['heal', 'damage boost'],
    image: "http://www.lastpick.net/assets/heroes/Lucio.png"
  },
  {
    name: 'Ana',
    type: 'Healer',
    abilities: ['heal', 'damage boost'],
    image: "http://www.lastpick.net/assets/heroes/Lucio.png"
  },
  {
    name: 'Zarya',
    type: 'Tank',
    abilities: ['heal', 'damage boost'],
    image: "http://www.lastpick.net/assets/heroes/Lucio.png"
  },
  {
    name: 'Lucio',
    type: 'Healer',
    abilities: ['heal', 'damage boost'],
    image: "http://www.lastpick.net/assets/heroes/Lucio.png"
  }
];

const CHARACTERSSTATS: CharacterStats[] = [
{
    name: 'Lucio',
    damage: '16',
    abilities: [
      {
        wallRide:
        {
          abName: 'Wall Ride',
          description: `Can ride along a wall
          Jump onto a wall to ride along it.`
        }
      },
      {
        heal:
        {
          abName: 'Healing Boost',
          description: `Heals nearby teammates.`
        }
      }
    ]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters = CHARACTERS;
  charactersstats = CHARACTERSSTATS;

  selectedCharacter: Character;
  selectedCharacterStats: CharacterStats

  onSelect(character: Character): void {
    this.selectedCharacter = character;
    //this.selectedCharacterStats = characterstats;
  }
}
