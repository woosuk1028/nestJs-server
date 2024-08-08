import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapService } from './map.service';
import { MapController } from './map.controller';
import { Map } from './entity/map.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Map])],
  providers: [MapService],
  controllers: [MapController]
})
export class MapModule {}
