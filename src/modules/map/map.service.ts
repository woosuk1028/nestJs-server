import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Map } from './entity/map.entity';
import { SearchMapDto } from './dto/search-map.dto';

@Injectable()
export class MapService {
    constructor(
        @InjectRepository(Map)
        private readonly mapRepository: Repository<Map>,
    ) {}

    //전체 조회
    async findAll(): Promise<Map[]> {
        return this.mapRepository.find();
    }
    
    //이름 검색
    async findByTitle(searchMapDto: SearchMapDto): Promise<Map[]> {
        const queryBuilder = this.mapRepository.createQueryBuilder('map');

        if(searchMapDto.title) {
            queryBuilder.andWhere('map.title LIKE :title', { title: `%${searchMapDto.title}%` });
        }

        return queryBuilder.getMany();
    }
}
