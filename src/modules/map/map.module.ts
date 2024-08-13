import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapService } from './map.service';
import { MapResolver } from './map.resolver';
import { Map } from './entity/map.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Map])],
  providers: [MapService, MapResolver],
})
export class MapModule {}
