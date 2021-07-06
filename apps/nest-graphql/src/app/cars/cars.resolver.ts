import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Cars } from './dto/cars.dto';
import { CarsInput } from './inputs/cars.input';

@Resolver(() => Cars)
export class CarsResolver {
  constructor(
    private carsService: CarsService
  ) {}

  @Query(() => Cars)
  async car(@Args('id', { type: () => Int }) id: number) {
    return this.carsService.getById({id});
  }

  @Query(() => [Cars])
  async cars() {
    return this.carsService.getCars();
  }

  @Mutation(() => Cars)
  async swapEngine(@Args({ name: 'id', type: () => Int }) id: number, @Args({ name: 'engine', type: () => String }) engine: string) {
    return this.carsService.swapEngine({id}, engine);
  }

  @Mutation(() => Cars)
  async createCar(@Args('car') car: CarsInput) {
    return this.carsService.createCar(car);
  }

  @Mutation(() => Cars)
  async deleteCar(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.carsService.deleteCar({id});
  }
}
