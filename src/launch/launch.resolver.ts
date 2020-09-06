import { LaunchService } from "./launch.service";
import { Resolver, Query, Args } from "@nestjs/graphql";


@Resolver('Launch')
export class LaunchResolver {
    constructor(private launchService: LaunchService){

    }

    @Query()
    launches(){
        return this.launchService.getAllLaunches();
    }

    @Query()
    launch( @Args('id') id: number){
        return this.launchService.getLaunchesById(id);
    }
}