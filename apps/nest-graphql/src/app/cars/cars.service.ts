import { Injectable } from '@nestjs/common';
import { Cars } from './dto/cars.dto';

@Injectable()
export class CarsService {

  cars: Cars[] = [
    {
      id: 1,
      manufacturer: 'Toyota',
      name: 'Supra',
      engine: {
        id: 1,
        manufacturer: 'Toyota',
        name: '2JZ-GTE',
        displacement: 2997,
        horsePower: 325,
        torque: 440
      }
    },
    {
      id: 2,
      manufacturer: 'Mitsubishi',
      name: 'Evo 7',
      engine: {
        id: 2,
        manufacturer: 'Mitsubishi',
        name: '4G69',
        displacement: 2378,
        horsePower: 165,
        torque: 217
      }
    },
    {
      id: 3,
      manufacturer: 'Nissan',
      name: 'Skyline GTR',
      engine: {
        id: 3,
        manufacturer: 'Nissan',
        name: 'RB26DETT',
        displacement: 2568,
        horsePower: 280,
        torque: 392
      }
    },
  ]

  getById(car: Cars) {
    return this.cars.find(c => c.id === car.id)
  }

  getCars() {
    return this.cars;
  }

  swapEngine(car: Cars, newEngine: string) {
    this.cars.find(c => c.id === car.id).engine = {
      ...this.cars.find(c => c.id === car.id).engine,
      name: newEngine
    };
    return this.cars.find(c => c.id === car.id);
  }

  createCar(car: Cars) {
    this.cars.push(car);
    return car;
  }

  deleteCar(car: Cars) {
    this.cars = this.cars.filter(c => c.id !== car.id)
    return this.cars;
  }
}
