// import {NgModule} from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// const appRotes:Routes=[
//     {path:'',redirectTo:'/recipes',pathMatch:'full'},
//     {path:'recipes', loadChildren :'./recipes/recipe.module.ts#RecipeModule'}
// ]
// @NgModule({
// imports:[RouterModule.forRoot(appRotes)],
// exports:[RouterModule]
// })
// export class AppRoutingModule{

// }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //{ path: 'recipes', loadChildren: () => import('./recipes/recipe.module').then(m => m.RecipeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
