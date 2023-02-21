import { INTEGER } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @AllowNull(false)
  @Column
  identification: string;

  @Column
  name: string;

  @Column({ field: 'last_name' })
  lastName: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @Column
  country: string;

  @Column
  city: string;

  @Column({ type: INTEGER })
  phone: number;

  @Column
  motivation: string;

  @Column
  terms: boolean;

  @Column
  enabled: boolean;

  @Column
  date_of_approval: Date;

  @Column
  ocupation: string;
}
