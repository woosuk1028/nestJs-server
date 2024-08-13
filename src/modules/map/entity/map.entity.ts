import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity('ls_map')
export class Map {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    seq: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    contents: string;

    @Field()
    @Column()
    lat: string;

    @Field()
    @Column()
    lng: string;

    @Field(() => Int, { nullable: true })
    @Column({ nullable: true })
    star: number | null;

    @Field()
    @CreateDateColumn({ type: 'timestamp' })
    create_date: Date;

    @Field({ nullable: true })
    @Column({ nullable: true })
    update_date: Date;
}