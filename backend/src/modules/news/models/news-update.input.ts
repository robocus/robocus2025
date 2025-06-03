import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewsUpdateInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  content: string;

  @Field(() => [String], { nullable: true })
  imageCreateBase64s: string[];

  @Field(() => [String], { nullable: true })
  imageDeleteIds: string[];
}
