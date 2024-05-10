import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../Shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe []>();
   //private  recipes:Recipe[]=[];
   private  recipes:Recipe[]=[
        new Recipe( 'Crispy Burger',
        ' A patty of ground beef grilled and placed between two halves of a bun',
        'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg'
        ,[
          new Ingredient('Bread',1),
          new Ingredient('Cheesse Slice',2),
          new Ingredient('Potatoes',1),
          new Ingredient('Onion',1),
          new Ingredient('Tomatoes',2),
          new Ingredient('mayonnaise',1),
        ]),
        new Recipe( 'Chesse Chilli Gravy',
        'Crispy, savory, and satisfying a great choice for a quick bite',
        'https://i.ytimg.com/vi/rPFmu4-nJTA/maxresdefault.jpg'
        ,[
          new Ingredient('Bread',1),
          new Ingredient('Cheesse Slice',2),
          new Ingredient('Onion',1),
          new Ingredient('Tomatoes',2),
          new Ingredient('Tomatoe Sauce',1),
          new Ingredient('Corn Starch',1),
          new Ingredient('Soya Sauce',1),
          new Ingredient('cilantro ',1),
        ]),
        new Recipe('The Crispy Fries',' Freakin Hot Fries. Piping-hot french fries, crispy and more flavorful than any at those fast food joints.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8t7Jy4Tkvw0peAsskJUnVjSJm4BxphU-PWM7v5-EJgw&s',
        [
          new Ingredient('Potatoes',2),
          new Ingredient('Corn Starch',1),
          new Ingredient('mayonnaise',1),
          new Ingredient('Tomatoe Sauce',1),
        ]
      ),
      new Recipe('Gravy Veg Manchurian',
        ' A tasty Indo Chinese starter dish of fried vegetable balls in a sweet & sour sauce',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-manchurian.jpg'
        ,[
          new Ingredient('Soya Sauce',1),
          new Ingredient('bottle gourd',1),
          new Ingredient('cilantro ',1),
          new Ingredient('Onion',1),
          new Ingredient('Tomatoes ',2),
          new Ingredient('Onion',1),
        ]),
        new Recipe('Chef Special Sizzler',
        ' A tasty Indo Chinese starter dish of fried vegetable balls in a sweet & sour sauce',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOng3ZpXdqwbeC-UN39usSBMExyVCRod3e6Q&s'
        ,[
         
          new Ingredient('cilantro ',1),
          new Ingredient('Tomatoes ',2),
          new Ingredient('Onion',1),
          new Ingredient('Potatoes',2),
          new Ingredient('Bread',1),
          new Ingredient('Cheesse Slice',2),
          new Ingredient('Soya Sauce',1),
          new Ingredient('Tomatoe Sauce',1),
        ]),
      ];
     constructor(private slService:ShoppingListService){}
      setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
      getRecipes(){
       // return this.recipesChanged.next(this.recipes.slice());
         return this.recipes.slice();
    }
    getRecipe(index:number){
      return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe:Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe:Recipe){
      this.recipes[index]=newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
    }
  
}
