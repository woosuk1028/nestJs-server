import { IsString, IsOptional  } from 'class-validator';

export class SearchMapDto {
    @IsString()
    title: string;
    // ?: ==> nullable
}