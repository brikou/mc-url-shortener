import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Url } from './models/url.model';
import { UrlsService } from './urls.service';
import { CreateUrlInput } from './dto/create-url.input';

@Resolver(() => Url)
export class UrlsResolver {
  constructor(private readonly urlsService: UrlsService) {}

  @Query(() => [Url])
  async urls() {
    return this.urlsService.findAll();
  }

  @Query(() => Url)
  async url(@Args('key') key: string) {
    return this.urlsService.findOne(key);
  }

  @Mutation(() => Url)
  async createUrl(@Args('createUrlInput') createUrlInput: CreateUrlInput) {
    return this.urlsService.create(createUrlInput);
  }
}
