import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private _router:Router) {

  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
  {
    console.log("activated fun");
    alert("You Are Not Admin");
    this._router.navigate(["/home"]);
    return false;
  }
}
