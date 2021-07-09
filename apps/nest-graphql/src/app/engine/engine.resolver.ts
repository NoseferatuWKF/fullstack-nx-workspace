import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Engine } from './dto/engine.dto';
import { EngineService } from './engine.service';

@Resolver(() => Engine)
export class EngineResolver {
  constructor(
    private engineService: EngineService
  ) {}

  @Query()
  async findEngineByID(@Args('id') id: string) {
    return this.engineService.findEngineByID(id).then(a => {
      console.log(a)
      return a.data
    });
  }

  @Query()
  async engines(@Args('_size') size: number, @Args('_cursor') cursor: string) {
    return await this.engineService.getEngine(size, cursor).then(a => {
      const obj = {
        data: []
      }
      a.data.forEach(d => obj.data.push(d.data))
      return obj
    });
  }

}
