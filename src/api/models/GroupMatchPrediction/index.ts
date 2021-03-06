import {
  DataType,
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  Default,
} from "sequelize-typescript";
import { User, GroupMatch } from "..";

@Table
export class GroupMatchPrediction extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  username: string;

  @PrimaryKey
  @ForeignKey(() => GroupMatch)
  @Column
  groupMatchId: number;

  @Column(DataType.SMALLINT)
  homeGoals: number;

  @Column(DataType.SMALLINT)
  awayGoals: number;

  @Default(0)
  @Column(DataType.SMALLINT)
  points: number;
}
