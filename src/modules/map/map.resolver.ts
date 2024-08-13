import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Map } from './entity/map.entity';
import { MapService } from './map.service';
import { SearchMapDto } from './dto/search-map.dto';
import { CreateMapDto } from './dto/create-map.dto';

@Resolver(() => Map)
export class MapResolver {
    constructor(private mapService: MapService) {}

    @Query(() => [Map], { name: 'maps' })
    getMaps(): Promise<Map[]> {
        return this.mapService.findAll();
    }

    @Query(() => [Map], { name: 'search' })
    getSearch(
        @Args('title', { type: () => String }) title: string,
    ): Promise<Map[]> {
        const searchMapDto = new SearchMapDto();
        searchMapDto.title = title;
        return this.mapService.search(searchMapDto);
    }

    @Mutation(() => Int, { name: 'create' })
    getCreate(
        @Args('title', { type: () => String }) title: string,
        @Args('contents', { type: () => String }) contents: string,
        @Args('lat', { type: () => String }) lat: string,
        @Args('lng', { type: () => String }) lng: string,
    ): Promise<number> {
        const createMapDto = new CreateMapDto();
        createMapDto.title = title;
        createMapDto.contents = contents;
        createMapDto.lat = lat;
        createMapDto.lng = lng;
        return this.mapService.create(createMapDto);
    };
}