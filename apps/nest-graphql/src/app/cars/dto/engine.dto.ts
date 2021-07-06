import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Engine {
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
