import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;
}
