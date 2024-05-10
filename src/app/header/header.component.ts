import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../Shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy{
collapsed=true;
isAuthenticated=false;
private userSub:Subscription;
constructor(private dataStorageService:DataStorageService,private authService:AuthService){}
ngOnInit(): void {
  this.userSub=this.authService.user.subscribe(
    user =>{
          this.isAuthenticated=!!user;
    }
  );
}
onSavaData(){
this.dataStorageService.storeRecipes();
}
onFetchdata(){
  this.dataStorageService.fetchRecipes().subscribe();
}
onLogout(){
  this.authService.logout();
}
ngOnDestroy(): void {
  this.userSub.unsubscribe();
}
}
