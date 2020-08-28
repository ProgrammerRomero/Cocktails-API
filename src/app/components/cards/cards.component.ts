import { Component} from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {

  cocktailData: any[] = [];

  constructor( private http: HttpClient ) {

    //Prepare to subscribe
      this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          .subscribe( (resp: any) => {

            this.cocktailData = resp;
            console.log(this.cocktailData);
          });
   }



}
