import { Column, Entity, PrimaryGeneratedColumn, Generated } from 'typeorm';

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
    nullable: false,
  })
  mutant_id: string;
}
