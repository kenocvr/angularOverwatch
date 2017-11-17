import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//https://overwatch-api.net/docs/v1/hero/{{hero_id}}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  results: string[];


  constructor(private http: HttpClient) { 
  }

  ngOnInit() : void { 
    // Make the HTTP request:
    this.http.get('https://overwatch-api.net/api/v1/hero/1').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['name'];
      console.log(this.results);
    });
    
  }

}
