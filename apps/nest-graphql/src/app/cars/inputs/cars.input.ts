import { Field, InputType, Int } from '@nestjs/graphql';
import { EngineInput } from './engine.input';

@InputType()
export class CarsInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  manufacturer?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => EngineInput, { nullable: true })
  engine: EngineInput;
}
