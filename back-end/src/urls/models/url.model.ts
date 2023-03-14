import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Url {
  @Field(() => ID)
  id: string;

  @Field()
  link: string;

  @Field()
  key: string;
}
