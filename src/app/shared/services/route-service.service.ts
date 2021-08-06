import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor(private _router : Router) { }

  public goTo(routeName : string) : void {
    this._router.navigate([routeName]);
  }
}
