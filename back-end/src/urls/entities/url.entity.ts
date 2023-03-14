import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @Column()
  @Index({ unique: true })
  key: string;
}
