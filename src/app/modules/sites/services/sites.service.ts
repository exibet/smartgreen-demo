import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

export interface SiteI {
  site: string;
  equips: EquipI[];
}

export interface EquipI {
  S3avg: number;
  S4avg: number;
  TempAvg: number;
  equip_name: string;
  time: string;
  timeseries: {
    hour: number;
    temperature: number;
  };
}

@Injectable()
export class SitesService {

  public sitesMap = {};

  constructor(private http: HttpClient) {
  }

  getSites() {
    return this.http.get<SiteI[]>('/fed/sitesdata.json').pipe(
      map((sites: SiteI[]) => {
        sites.map((site: SiteI) => this.sitesMap[site.site] = site);

        return sites;
      })
    );
  }

}
