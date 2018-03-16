import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SiteI, SitesService } from './sites.service';

@Injectable()
export class SitesResolver implements Resolve<SiteI> {
  constructor(private siteService: SitesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return !this.siteService.sitesMap.hasOwnProperty(route.params['site'])
      ? this.siteService.getSites()
      : [];
  }
}
