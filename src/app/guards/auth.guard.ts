import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let token = null
  if(typeof window !== 'undefined'){
    token= localStorage.getItem('token')
  }
  if(token != null){
    return true
  }else{
    router.navigateByUrl('/login')
    return false
  }
};
