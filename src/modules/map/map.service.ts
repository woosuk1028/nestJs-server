import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { elasticsearchClient } from '../../elasticsearch.client';
import { Map } from './entity/map.entity';
import { SearchMapDto } from './dto/search-map.dto';
import { CreateMapDto } from './dto/create-map.dto';
import { formatDateToCustom } from '../../utils'

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
    async search(searchMapDto: SearchMapDto): Promise<Map[]> {
        // const { title } = searchMapDto;
        //
        // // ElasticSearch에서 검색 쿼리 실행
        // const result = await elasticsearchClient.search<Map>({
        //     index: 'maps',
        //     body: {
        //         query: {
        //             match: { title }
        //         }
        //     }
        // });
        //
        // // ElasticSearch에서 검색된 결과를 반환
        // const hits = result.hits.hits;
        // return hits.map(hit => hit._source);

        const queryBuilder = this.mapRepository.createQueryBuilder('map');

        if(searchMapDto.title) {
            queryBuilder.andWhere('map.title LIKE :title', { title: `%${searchMapDto.title}%` });
        }

        return queryBuilder.getMany();
    }
    
    //생성
    async create(createMapDto: CreateMapDto): Promise<number> {
        const { title, contents, lat, lng } = createMapDto;
        const create_date = formatDateToCustom(new Date);

        try {
            const query = this.mapRepository.create({
                title,
                contents,
                lat,
                lng,
                create_date
            });

            const result = await this.mapRepository.save(query);

            // ElasticSearch에 인덱싱
            // await elasticsearchClient.index({
            //     index: 'maps',
            //     body: {
            //         seq: result.seq,
            //         title,
            //         contents,
            //         lat,
            //         lng,
            //         create_date
            //     }
            // });

            return result.seq;
        } catch (error) {
            console.error("map create 저장 중 에러 발생: "+error);
            return 0;
        }
    }
}
