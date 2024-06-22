import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario:string, password:string){
    sessionStorage.setItem("isLogged", 'true')
  }
  logout(){
    sessionStorage.clear()
  }
  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged")
  }
}
