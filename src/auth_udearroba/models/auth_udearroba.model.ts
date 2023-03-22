import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({ tableName: 'auth_udearroba', updatedAt: false, createdAt: false })
export class auth_udearroba extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Unique
  @AllowNull(false)
  @Column
  documento: string;

  @AllowNull(false)
  @Column
  nombre: string;

  @AllowNull(false)
  @Column({ field: 'area' })
  area: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @Column
  cargo: string;
}
