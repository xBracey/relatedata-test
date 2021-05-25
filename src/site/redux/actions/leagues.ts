import { types } from "../reducers";
import { fetchLeague } from "../requests";
import { ThunkResult } from "../types";

export const getLeague = (name: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.leagues.LEAGUES_LOADING_LEAGUES });

    return fetchLeague(getState(), name).then(response =>
      !response.error
        ? dispatch({
            type: types.leagues.LEAGUES_FETCHED_LEAGUE,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
