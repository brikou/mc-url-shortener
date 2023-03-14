import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';
import { UrlsResolver } from './urls.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  controllers: [UrlsController],
  providers: [UrlsService, UrlsResolver],
})
export class UrlsModule {}
