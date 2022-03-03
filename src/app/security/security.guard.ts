import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class SecurityGuard implements CanActivateChild {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    await this.router.navigate(['/auth'], {
      queryParams: {
        redirectPath: state.url,
      },
      relativeTo: this.activatedRoute,
    });
    return false;
  }
}
