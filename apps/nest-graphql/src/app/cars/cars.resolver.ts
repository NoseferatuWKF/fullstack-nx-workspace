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
  async cars() {
    return await this.carsService.getCars();
  }
}
