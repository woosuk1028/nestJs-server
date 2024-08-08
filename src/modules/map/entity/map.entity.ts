import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('ls_map')
export class Map {
    @PrimaryGeneratedColumn()
    seq: number;

    @Column()
    title: string;

    @Column()
    contents: string;

    @Column()
    lat: string;

    @Column()
    lng: string;

    @Column()
    star: number;

    @CreateDateColumn({ type: 'timestamp' })
    create_date: Date;

    @Column()
    update_date: Date;
}