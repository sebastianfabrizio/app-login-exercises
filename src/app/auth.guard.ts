import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router =inject(Router)
  const valorIsLogged = auth.isLogged()
  if(!!valorIsLogged){
  return true;
  }

  router.navigate(["login"], {queryParams: {blockedPage:state.url}})
  return false;

};
