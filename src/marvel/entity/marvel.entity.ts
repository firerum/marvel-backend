import { Column, Entity, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class MarvelEntity {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    nullable: false,
    default: true,
  })
  status: boolean;

  @Column({
    nullable: false,
  })
  gender: string;

  @Column({
    nullable: false,
  })
  age: number;

  // @Column({
  //   nullable: true,
  //   type: 'text',
  //   array: true,
  //   default: [],
  // })
  @Column({
    nullable: true,
  })
  @Generated('uuid')
  accomplices: string;

  // @Column({
  //   nullable: true,
  //   type: 'text',
  //   array: true,
  //   default: [],
  // })
  @Column({
    nullable: true,
  })
  @Generated('uuid')
  enemies: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
    default: new Date(),
  })
  created_at: Date;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  updated_at: Date;
}
