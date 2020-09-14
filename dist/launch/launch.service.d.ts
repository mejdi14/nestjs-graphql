import { HttpService } from '@nestjs/common';
import { SpaceX, LaunchModel } from './launch.model';
import { Observable } from 'rxjs';
export declare class LaunchService {
    private http;
    private apiUrl;
    constructor(http: HttpService);
    toLaunch(launch: SpaceX): LaunchModel;
    getAllLaunches(): Observable<LaunchModel>;
    getLaunchesById(id: number): Observable<LaunchModel>;
}
