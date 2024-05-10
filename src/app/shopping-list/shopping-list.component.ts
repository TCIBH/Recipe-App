import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangedSub: Subscription;
  constructor(private slService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangedSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index: number) {
    this, this.slService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.igChangedSub.unsubscribe();
  }
}
