import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { promise } from "protractor";
import { Observable } from "rxjs/observable";
import { AuthService } from "./auth.service";
@Injectable()

export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService, private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean
    {
         if(this.authService.loggedIn)
         return true;
         else
         this.router.navigate(['/books']);
    }
}