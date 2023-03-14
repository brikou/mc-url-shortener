import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlInput } from './dto/create-url.input';
import { Url } from './entities/url.entity';

@Injectable()
export class UrlsService {
  constructor(
    @InjectRepository(Url)
    private urlsRepository: Repository<Url>,
  ) {}

  create(createUrlInput: CreateUrlInput) {
    const url = this.urlsRepository.create({
      link: createUrlInput.link,
      key: this.generateShortUrl(),
    });

    return this.urlsRepository.save(url);
  }

  generateShortUrl(length = 6): string {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shortUrl = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      shortUrl += chars[randomIndex];
    }

    return shortUrl;
  }

  findAll() {
    return this.urlsRepository.find();
  }

  findOne(key: string) {
    return this.urlsRepository.findOne({ key });
  }
}
