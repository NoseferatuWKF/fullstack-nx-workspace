import { Injectable } from '@nestjs/common';
import { FaunadbService, query as q } from 'nestjs-faunadb';
import { FaunaCollectionResponse, FaunaResponse } from '../shared/fauna.dao';
import { Cars } from './dto/cars.dto';

@Injectable()
export class CarsService {

  client = this.faunaDBService.getClient();

  constructor(private faunaDBService: FaunadbService) {
  }

  getCarById(car: Cars) {
    // return this.cars.find(c => c.id === car.id)
  }

  async getCars() : Promise<FaunaCollectionResponse<FaunaResponse<Cars>[]>> {
    const query = q.Map(q.Paginate(q.Documents(q.Collection('Cars'))), q.Lambda(x => q.Get(x)))
    return await this.client.query(query);
  }

  createCar(car: Cars) {
    // this.cars.push(car);
    // return car;
  }

  deleteCar(car: Cars) {
    // this.cars = this.cars.filter(c => c.id !== car.id)
    // return this.cars;
  }
}
