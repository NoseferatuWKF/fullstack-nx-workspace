import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Engine } from './engine.dto';

@ObjectType()
export class Cars {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  manufacturer?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Engine, { nullable: true })
  engine?: Engine;
}
