import { IsString, IsOptional  } from 'class-validator';

export class SearchMapDto {
    @IsOptional()
    @IsString()
    title?: string;
    // ?: ==> nullable
}