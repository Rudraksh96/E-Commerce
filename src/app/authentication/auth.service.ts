import { Injectable } from '@angular/core';
import { Login } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
// IsLoggedIn(){
//   return !!(sessionStorage.getItem('user') && sessionStorage.getItem('pass'))
// }
IsLoggedOut():void
{
sessionStorage.setItem('IsLoggedIn','false');
sessionStorage.removeItem('token');
}
}
