import { combineReducers } from "redux";
import user, { userTypes, IUser } from "./user";
import message, { messageTypes, IMessage } from "./message";
import auth, { authTypes, IAuth } from "./auth";
import groups, { groupsTypes, IGroups } from "./groups";
import teams, { teamsTypes, ITeams } from "./teams";
import players, { playersTypes, IPlayers } from "./players";
import groupMatches, { groupMatchesTypes, IGroupMatches } from "./groupMatches";
import groupMatchPredictions, {
  groupMatchPredictionsTypes,
  IGroupMatchPredictions,
} from "./groupMatchPredictions";
import leagues, { leaguesTypes, ILeagues } from "./leagues";
import users, { usersTypes, IUsers } from "./users";

export const cache = {};

export const types = {
  user: userTypes,
  message: messageTypes,
  auth: authTypes,
  groups: groupsTypes,
  teams: teamsTypes,
  players: playersTypes,
  groupMatches: groupMatchesTypes,
  groupMatchPredictions: groupMatchPredictionsTypes,
  leagues: leaguesTypes,
  users: usersTypes,
};

export interface IRootState {
  user: IUser;
  message: IMessage;
  auth: IAuth;
  groups: IGroups;
  teams: ITeams;
  players: IPlayers;
  groupMatches: IGroupMatches;
  groupMatchPredictions: IGroupMatchPredictions;
  leagues: ILeagues;
  users: IUsers;
}

export default combineReducers({
  user,
  message,
  auth,
  groups,
  teams,
  players,
  groupMatches,
  groupMatchPredictions,
  leagues,
  users,
});
