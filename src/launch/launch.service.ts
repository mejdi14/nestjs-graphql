import { Injectable, HttpService } from '@nestjs/common';
import { SpaceX, LaunchModel } from './launch.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LaunchService {
  private apiUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpService) {

  }

  toLaunch(launch: SpaceX): LaunchModel {
    return {
      id: String(launch.flight_number || 0),
      site: launch.launch_site && launch.launch_site.site_name,
      launch_year: launch.launch_year,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
    };

  }

  getAllLaunches(): Observable<LaunchModel> {
    return this.http.get(`${this.apiUrl}/launches`).pipe(
      map(({ data }) => data.map(this.toLaunch)),
    );
  }

  getLaunchesById(id: number): Observable<LaunchModel> {
    return this.http.get(`${this.apiUrl}/launches/${id}`).pipe(
      map(({ data }) => this.toLaunch(data)),
    );
  }
}