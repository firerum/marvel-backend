import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  ManyToOne,
} from 'typeorm';
import { MarvelEntity } from './marvel.entity';

@Entity()
export class AccompliceEntity {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: true,
  })
  mutant_id: string;

  @ManyToOne(() => MarvelEntity, (marvel) => marvel.accomplices)
  marvel: MarvelEntity;
}
