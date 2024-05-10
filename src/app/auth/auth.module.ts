import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.comonent";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../Shared/shared.module";
@NgModule({
    declarations:[
        AuthComponent,
    ],
    imports:[CommonModule,FormsModule,RouterModule.forChild([
    {path:'auth',component:AuthComponent}
    ]),SharedModule]
})
export class AuthModule{

}