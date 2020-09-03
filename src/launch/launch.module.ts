import { Module } from '@nestjs/common';
import { LaunchService } from './launch.service';

@Module({
  providers: [LaunchService]
})
export class LaunchModule {}
