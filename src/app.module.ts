import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { LaunchModule } from './launch/launch.module';
import { join } from 'path';


@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths:['./**/*.graphql'],
      definitions: { 
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      introspection: true,
      playground: true,
    }),
    LaunchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
