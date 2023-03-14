import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { MessageModule } from './modules/message/message.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UrlsModule } from './urls/urls.module';

const graphQLConfig = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  debug: false,
  playground: true,
  autoSchemaFile: true,
});

const typeORMConfig = TypeOrmModule.forRoot();

const modules = [MessageModule, UrlsModule];

@Module({
  imports: [graphQLConfig, typeORMConfig, ...modules],
})
export class AppModule {
  constructor(private _connection: Connection) {}
}
