import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      MapModule
  ]
})
export class AppModule {}
