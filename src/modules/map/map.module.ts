import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapService } from './map.service';
import { MapResolver } from './map.resolver';
import { Map } from './entity/map.entity';
// import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
      TypeOrmModule.forFeature([Map]),
      // ElasticsearchModule,
  ],
  providers: [MapService, MapResolver],
})
export class MapModule {}
