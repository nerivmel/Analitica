import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
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
}
