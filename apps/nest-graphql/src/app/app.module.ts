import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CarsModule } from './cars/cars.module';
import { FaunadbModule, FaunadbModuleOptions } from 'nestjs-faunadb';
import { EngineModule } from './engine/engine.module';
import { environment } from '../environments/environment';
import { join } from 'path';

const fdbConfig: FaunadbModuleOptions = {
  secret: environment.faunaSecret
}

@Module({
  imports: [
    CarsModule,
    EngineModule,
    GraphQLModule.forRoot({
      typePaths: ['apps/nest-graphql/src/*.gql'],
      definitions: {
        path: join(process.cwd(), 'apps/nest-graphql/src/graphql.ts'),
      },
      // autoSchemaFile: 'apps/nest-graphql/schema.gql',
      // sortSchema: true
    }),
    FaunadbModule.forRoot(fdbConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
