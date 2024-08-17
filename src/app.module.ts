import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
// import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MapModule } from './modules/map/map.module';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'ws',
        password: '12345',
        database: 'newframe',
        // synchronize: true,
        autoLoadEntities: true,
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // 스키마 자동 생성
      }),
      // ElasticsearchModule.register({
      //     node: 'http://localhost:9200',
      //     cloud: undefined,  // 명시적으로 undefined 설정
      //     auth: undefined,   // auth도 명시적으로 undefined 설정 (필요 없는 경우)
      // }),
      MapModule
    ]
})
export class AppModule {}
