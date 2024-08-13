import { Controller, Get, Post, Query, UsePipes, Body, ValidationPipe } from '@nestjs/common';
import { MapService } from './map.service';
import { Map } from './entity/map.entity';
import { SearchMapDto } from './dto/search-map.dto';

@Controller('map')
export class MapController {
    constructor(private readonly mapService: MapService) {}

    //전체 조회
    @Get('find')
    findAll(): Promise<Map[]> {
        return this.mapService.findAll();
    }

    //이름 검색
    @Get('search')
    @UsePipes(new ValidationPipe({ transform: true }))
    findByTitle(@Query() SearchMapDto: SearchMapDto): Promise<Map[]> {
        return this.mapService.search(SearchMapDto);
    }
}
