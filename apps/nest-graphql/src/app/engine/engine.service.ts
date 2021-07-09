import { Injectable } from '@nestjs/common';
import { FaunadbService, query as q } from 'nestjs-faunadb';
import { FaunaCollectionResponse, FaunaResponse } from '../shared/fauna.dao';
import { Engine } from './dto/engine.dto';

@Injectable()
export class EngineService {

  client = this.faunaDBService.getClient();

  sampleEngine: FaunaCollectionResponse<FaunaResponse<Engine>[]> =
  {
    data: [
      {
        ref: 'test',
        ts: 100,
        data : {
          name: 'test',
          manufacturer: 'test',
          displacement: 1,
          horsePower: 1,
          torque: 1,
        },
      },
      {
        ref: 'test2',
        ts: 100,
        data : {
          name: 'test2',
          manufacturer: 'test2',
          displacement: 2,
          horsePower: 2,
          torque: 2,
        },
      },
    ]
  }


  constructor(private faunaDBService: FaunadbService) {
  }

  async findEngineByID(id: string): Promise<FaunaResponse<Engine>> {
    const query = q.Get(q.Ref(q.Collection('Engine'), id));
    // return await this.sampleEngine.data.find(d => d.ref === id).data
    return await this.client.query(query);
  }

  async getEngine(size: number, cursor: string): Promise<FaunaCollectionResponse<FaunaResponse<Engine>[]>> {
    const query = q.Map(q.Paginate(q.Documents(q.Collection('Engine'))), x => q.Get(x))
    return await this.client.query(query);
    // const data = this.sampleEngine.data.slice(0, size);
    // this.sampleEngine.data = data;
    // return await this.sampleEngine
  }
}
