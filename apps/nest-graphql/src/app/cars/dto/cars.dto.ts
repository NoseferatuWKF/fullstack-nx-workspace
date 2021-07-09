import { Field, ObjectType } from '@nestjs/graphql';
import { Engine } from '../../engine/dto/engine.dto';

@ObjectType()
export class Cars {

  @Field({ nullable: true })
  manufacturer?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Engine, { nullable: true })
  engine?: Engine;
}
