import _ from "lodash";
import { IAction, IReducers } from "../types";

export interface IGroupMatch {
  id: number;
  date: string;
  groupLetter: string;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
}

export interface IGroupMatches {
  loading: boolean;
  groupMatches: IGroupMatch[];
}

const initialState: IGroupMatches = {
  loading: false,
  groupMatches: [],
};

export const groupMatchesTypes = {
  GROUP_MATCHES_FETCHED_GROUP_MATCH: "fetchedGroupMatch",
  GROUP_MATCHES_FETCHED_GROUP_MATCHES: "fetchedGroupMatches",
  GROUP_MATCHES_LOADING_GROUP_MATCHES: "loadingGroupMatches",
  GROUP_MATCHES_DELETED_GROUP_MATCH: "deletedGroupMatch",
};

/**
 * GROUP MATCHES REDUCERS - START
 */

const loadingGroupMatches = state => ({ ...state, loading: true });

const fetchedGroupMatches = (state: IGroupMatches, { data }) => {
  const groupMatches = _.uniqBy([...data, ...state.groupMatches], "id");

  return { ...state, loading: false, groupMatches };
};

const fetchedGroupMatch = (state: IGroupMatches, { data }) => {
  const groupMatches = _.uniqBy([data, ...state.groupMatches], "id");

  return { ...state, loading: false, groupMatches };
};

const deletedGroupMatch = (state: IGroupMatches, { data }) => {
  const groupMatches = _.uniqBy([data, ...state.groupMatches], "id");

  return { ...state, loading: false, groupMatches };
};

/**
 * GROUP MATCHES REDUCERS - END
 * */

const reducers: IReducers<IGroupMatches> = {
  fetchedGroupMatches,
  loadingGroupMatches,
  fetchedGroupMatch,
  deletedGroupMatch,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
