import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EquipI, SiteI, SitesService } from '../../services/sites.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-site-equipment',
  templateUrl: './site-equipment.component.html',
  styleUrls: ['./site-equipment.component.scss']
})
export class SiteEquipmentComponent implements OnInit, AfterViewInit {

  site: SiteI;
  displayedColumns = ['equip_name', 'lastUpdate', 'time', 'S3avg', 'S4avg', 'TempAvg'];
  dataSource: MatTableDataSource<EquipI> = new MatTableDataSource<EquipI>([]);
  routeName: string = this.route.snapshot.params['site'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private siteService: SitesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.site = this.siteService.sitesMap[this.routeName];
      this.dataSource.data = this.site.equips;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  selectEquipment(equipment: EquipI) {
    this.router.navigate(['sites', this.routeName, 'analytics', equipment.equip_name]);
  }

}
