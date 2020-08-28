import { Component} from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {

  cocktailData
  cocktailDataTitle: any[] = [];
  cocktailDataCategory: any[] = [];
  cocktailDataIngredients: any[] = [];
  cocktailDataImage: any[] = [];
  cocktailDataInstructions: any[] = [];

  constructor( private http: HttpClient ) {

    //Prepare to subscribe
      this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          .subscribe( (resp: any) => {

            this.cocktailData = resp.drinks[0];
            console.log(this.cocktailData);
            this.cocktailDataTitle = resp.drinks[0].strDrink;
            this.cocktailDataCategory = resp.drinks[0].strCategory;
            this.cocktailDataIngredients = resp.drinks[0].strIngredient1;
            this.cocktailDataImage = resp.drinks[0].strDrinkThumb;
            this.cocktailDataInstructions = resp.drinks[0].strInstructions;
            console.log(this.cocktailDataIngredients);
          });
   }



}
