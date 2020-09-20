"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let LaunchService = class LaunchService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.spacexdata.com/v3';
    }
    toLaunch(launch) {
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
    getAllLaunches() {
        return this.http.get(`${this.apiUrl}/launches`).pipe(operators_1.map(({ data }) => data.map(this.toLaunch)));
    }
    getLaunchesById(id) {
        return this.http.get(`${this.apiUrl}/launches/${id}`).pipe(operators_1.map(({ data }) => this.toLaunch(data)));
    }
};
LaunchService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], LaunchService);
exports.LaunchService = LaunchService;
//# sourceMappingURL=launch.service.js.map