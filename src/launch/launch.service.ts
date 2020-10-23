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
      launch_date_local: launch.launch_date_local,
      launch_date_utc: launch.launch_date_utc,
      launch_date_unix: launch.launch_date_unix,
      fire_date_utc: launch.static_fire_date_utc,
      fire_date_unix: launch.static_fire_date_unix,
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
      links: {
        article_link: launch.links.article_link,
        wikipedia: launch.links.wikipedia,
        video_link: launch.links.video_link,
        youtube_id: launch.links.youtube_id
      }
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