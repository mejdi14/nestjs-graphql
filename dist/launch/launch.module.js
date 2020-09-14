"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchModule = void 0;
const common_1 = require("@nestjs/common");
const launch_service_1 = require("./launch.service");
const launch_resolver_1 = require("./launch.resolver");
const mission_resolver_1 = require("./mission.resolver");
let LaunchModule = class LaunchModule {
};
LaunchModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule],
        providers: [launch_service_1.LaunchService, launch_resolver_1.LaunchResolver, mission_resolver_1.MissionResolver]
    })
], LaunchModule);
exports.LaunchModule = LaunchModule;
//# sourceMappingURL=launch.module.js.map