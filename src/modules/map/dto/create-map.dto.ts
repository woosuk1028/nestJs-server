import { IsString, IsOptional  } from 'class-validator';

export class CreateMapDto {
    @IsString()
    title: string;

    @IsString()
    contents: string;

    @IsString()
    lat: string;

    @IsString()
    lng: string;
    // ?: ==> nullable
}