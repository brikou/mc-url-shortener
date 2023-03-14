import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Redirect,
} from '@nestjs/common';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Get(':key')
  @Redirect()
  async redirect(@Param('key') key: string) {
    const url = await this.urlsService.findOne(key);
    if (url === undefined) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return { url: url.link };
  }
}
