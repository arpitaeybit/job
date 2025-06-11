import { HttpInterceptorFn } from '@angular/common/http';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  // let token = null
  // if (typeof window !== 'undefined') {
  //   token = localStorage.getItem('token')
  // }
  
  // const newreq = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${token}`
  //   }
  // })
  // return next(newreq);
  return next(req)
};
