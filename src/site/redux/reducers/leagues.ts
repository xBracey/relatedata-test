import { IAction, IReducers } from "../types";

interface ILeagueUser {
  rank: number;
  displayName: string;
  username: string;
  points: number;
}

interface ILeague {
  name: string;
  code: string;
  users: ILeagueUser[];
}

export interface ILeagues {
  id: string;
  loading: boolean;
  leagues: {
    [name: string]: ILeague;
  };
}

const initialState: ILeagues = {
  id: null,
  loading: false,
  leagues: {},
};

export const leaguesTypes = {
  LEAGUES_FETCHED_LEAGUE: "fetchedLeague",
  LEAGUES_LOADING_LEAGUES: "loadingLeagues",
};

/**
 * LEAGUES REDUCERS - START
 */

const loadingLeagues = state => ({ ...state, loading: true });

const fetchedLeague = (state: ILeagues, { data }) => {
  const leagues = { ...state.leagues };

  leagues[data.leagueName] = {
    name: data.leagueName,
    code: data.code,
    users: data.users.map(user => ({
      rank: user.UserLeague.rank,
      displayName: user.displayName ?? user.username,
      username: user.username,
      points: user.points,
    })),
  };

  return { ...state, loading: false, leagues };
};

/**
 * LEAGUES REDUCERS - END
 * */

const reducers: IReducers<ILeagues> = {
  fetchedLeague,
  loadingLeagues,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
