import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { User, League } from "..";

@Table
export class UserLeague extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  username: string;

  @PrimaryKey
  @ForeignKey(() => League)
  @Column
  leagueCode: string;

  @Column(DataType.BOOLEAN)
  admin: boolean;

  @Column(DataType.SMALLINT)
  rank: number;
}
