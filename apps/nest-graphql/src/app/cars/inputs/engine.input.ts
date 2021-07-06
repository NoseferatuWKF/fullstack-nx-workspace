import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class EngineInput {
  @Field(() => Int)
  id?: number;

  @Field({ nullable: true })
  manufacturer?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  displacement?: number;

  @Field(() => Int, { nullable: true })
  horsePower?: number;

  @Field(() => Int, { nullable: true })
  torque?: number;
}
