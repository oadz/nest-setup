import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'USER_ID' })
  userID: number;

  @Column({ name: 'USERNAME', type: 'varchar', length: 15 })
  userName: string;

  @Column({ name: 'PASSWORD_HASH', type: 'varchar' })
  passwordHash: string;

  @Column({ name: 'FIRSTNAME', type: 'varchar', length: 30 })
  firstName: string;

  @Column({ name: 'LASTNAME', type: 'varchar', length: 30 })
  lastName: string;
}
