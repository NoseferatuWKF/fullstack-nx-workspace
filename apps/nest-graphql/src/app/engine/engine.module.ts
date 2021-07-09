import { Module } from '@nestjs/common';
import { EngineResolver } from './engine.resolver';
import { EngineService } from './engine.service';

@Module({
  providers: [EngineResolver, EngineService],
})
export class EngineModule {
}
