import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

/* API ENDPOINT */
//https://overwatch-api.net/docs/v1/hero/{{hero_id}}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  results: string[];
  name: string;
  health: string;
  armor: string;
  shield: string;

  constructor(private http: HttpClient) { 
  }

  ngOnInit() : void { 
    // Make the HTTP request:

    // Ana
    this.http.get('https://overwatch-api.net/api/v1/hero/1').subscribe(data => {
      // Read a field from the JSON response.
      this.results = data['name'];
      this.name = data['name'];
      this.health = data['health'];
      this.armor = data['armor'];
      this.shield = data['shield'];
      console.log(this.results);
      console.log("Name: " + this.name + " " + "Health: " + this.health);
    });

    // Bastion
    this.http.get('https://overwatch-api.net/api/v1/hero/2').subscribe(data => {
      this.results = data['name'];
      this.results = data['name'];
      this.name = data['name'];
      this.health = data['health'];
      this.armor = data['armor'];
      this.shield = data['shield'];
    });
    
  }

}
