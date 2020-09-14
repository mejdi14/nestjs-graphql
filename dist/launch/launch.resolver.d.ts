import { LaunchService } from "./launch.service";
export declare class LaunchResolver {
    private launchService;
    constructor(launchService: LaunchService);
    launches(): import("rxjs").Observable<import("./launch.model").LaunchModel>;
    launch(id: number): import("rxjs").Observable<import("./launch.model").LaunchModel>;
}
