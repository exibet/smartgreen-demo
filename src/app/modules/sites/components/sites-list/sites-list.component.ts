import { Component, OnInit } from '@angular/core';
import { SiteI, SitesService } from '../../services/sites.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss']
})
export class SitesListComponent implements OnInit {

  sites: Observable<SiteI[]>;

  constructor(private sitesService: SitesService,
              private router: Router) { }

  ngOnInit() {
    this.sites = this.sitesService.getSites();
  }


  getEquipment(site: SiteI) {
    this.router.navigate(['sites', site.site]);
  }

}
