import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { News } from './models/news.entity';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guard';
import { NewsCreateInput } from './models/new-create.input';
import { NewsUpdateInput } from './models/news-update.input';

@Resolver()
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Query(() => News)
  async news(@Args('id') id: string): Promise<News | null> {
    const news = await this.newsService.findOneById(id);
    return news;
  }

  @Query(() => [News])
  async newsfeed(
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<News[]> {
    return await this.newsService.find(skip, take);
  }

  @UseGuards(JwtGuard)
  @Mutation(() => News)
  async createNews(@Args('data') data: NewsCreateInput) {
    return await this.newsService.create(data);
  }

  @UseGuards(JwtGuard)
  @Mutation(() => News)
  async updateNews(
    @Args('id') id: string,
    @Args('data') data: NewsUpdateInput,
  ): Promise<News | null> {
    return await this.newsService.update(id, data);
  }

  @UseGuards(JwtGuard)
  @Mutation(() => News)
  async deleteNews(@Args('id') id: string): Promise<News | null> {
    return await this.newsService.delete(id);
  }
}
