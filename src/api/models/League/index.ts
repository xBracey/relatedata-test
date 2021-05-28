import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  BelongsToMany,
} from "sequelize-typescript";
import { User } from "../User";
import { UserLeague } from "../UserLeague";

@Table
export class League extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  leagueName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  code: string;

  @BelongsToMany(() => User, () => UserLeague)
  users: User[];
}
