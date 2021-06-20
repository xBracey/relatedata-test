import { IKnockoutMatchReducer } from "components/EditCard/KnockoutMatchEditCard/KnockoutMatchReducer";
import _ from "lodash";
import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchKnockoutMatches = async (
  state: IRootState
): Promise<IAPIResponse> => authorisedRequest(state, "/knockoutMatch");

export const fetchMatchesFromRound = async (
  state: IRootState,
  roundName: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/knockoutMatch/group/${roundName}`);

export const fetchKnockoutMatch = async (
  state: IRootState,
  id: string
): Promise<IAPIResponse> => authorisedRequest(state, `/knockoutMatch/${id}`);

export const deleteKnockoutMatch = async (
  state: IRootState,
  id: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/knockoutMatch/${id}`, { method: "DELETE" });

export const postKnockoutMatch = async (
  state: IRootState,
  knockoutMatch: IKnockoutMatchReducer,
  roundName: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/knockoutMatch/create`, {
    data: _.pickBy(
      {
        ...knockoutMatch,
        roundName,
        homeGoals: parseInt(knockoutMatch.homeGoals),
        awayGoals: parseInt(knockoutMatch.awayGoals),
        homePenalties: parseInt(knockoutMatch.homePenalties),
        awayPenalties: parseInt(knockoutMatch.awayPenalties),
      },
      _.isNil
    ),
    method: "POST",
  });

export const putKnockoutMatch = async (
  state: IRootState,
  id: string,
  knockoutMatch: IKnockoutMatchReducer,
  roundName: string
): Promise<IAPIResponse> => {
  console.log(knockoutMatch.awayGoals === "0");

  console.log(
    _.pickBy(
      {
        ...knockoutMatch,
        roundName,
        homeGoals: parseInt(knockoutMatch.homeGoals),
        awayGoals: parseInt(knockoutMatch.awayGoals),
        homePenalties: parseInt(knockoutMatch.homePenalties),
        awayPenalties: parseInt(knockoutMatch.awayPenalties),
      },
      value => !_.isNil(value)
    )
  );

  return authorisedRequest(state, `/knockoutMatch/${id}`, {
    data: _.pickBy(
      {
        ...knockoutMatch,
        roundName,
        homeGoals: parseInt(knockoutMatch.homeGoals),
        awayGoals: parseInt(knockoutMatch.awayGoals),
        homePenalties: parseInt(knockoutMatch.homePenalties),
        awayPenalties: parseInt(knockoutMatch.awayPenalties),
      },
      value => !_.isNil(value)
    ),
    method: "PUT",
  });
};
