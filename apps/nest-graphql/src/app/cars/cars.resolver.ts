import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Cars } from './dto/cars.dto';
import { CarsInput } from './inputs/cars.input';

@Resolver(() => Cars)
export class CarsResolver {
  constructor(
    private carsService: CarsService
  ) {}

  @Query(() => [Cars])
  async cars(@Args('_size') size: number, @Args('_cursor') cursor: string) {
    return await this.carsService.getCars(size, cursor).then(a => {
      const obj = {
        data: []
      }
      console.log(a.data.map(d => d.data.engine))
      a.data.forEach(d => obj.data.push(d.data))
      return obj
    });
  }
}
