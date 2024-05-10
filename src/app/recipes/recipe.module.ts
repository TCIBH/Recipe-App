import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesComponent } from "./recipes.component";
import { RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import { RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../Shared/shared.module";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports:[RouterModule,ReactiveFormsModule,SharedModule],
    exports:[
        RecipesComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeListComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ]
})
export class RecipeModule{

}