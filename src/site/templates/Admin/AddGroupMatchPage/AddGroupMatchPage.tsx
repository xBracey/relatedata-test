import { GroupMatchEditCard } from "components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroupMatch, getTeamsFromGroup } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { Page } from "templates";
import { colours } from "theme";
import { AddPageContainer } from "../styles";

interface IAddGroupMatchPage {
  groupLetter: string;
  id: string;
}

export const AddGroupMatchPage = ({ groupLetter, id }: IAddGroupMatchPage) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (id !== null) dispatch(getGroupMatch(id));
    if (groupLetter !== null) dispatch(getTeamsFromGroup(groupLetter));
  }, []);

  const teams = useSelector((state: IRootState) => state.teams);
  const teamNames = teams.teams
    .filter(team => team.groupLetter === groupLetter)
    .map(team => team.name);

  const groupMatches = useSelector((state: IRootState) => state.groupMatches);
  const groupMatch = id
    ? groupMatches.groupMatches.find(match => match.id === id)
    : {
        homeTeam: "",
        awayTeam: "",
        homeTeamGoals: "",
        awayTeamGoals: "",
      };

  const onSave = () => {};

  const onDelete = () => {};

  return (
    <Page
      title="Add Team"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <AddPageContainer>
        {groupMatch && teamNames.length ? (
          <GroupMatchEditCard
            teamNames={teamNames}
            groupMatch={{
              homeTeam: groupMatch.homeTeam,
              awayTeam: groupMatch.awayTeam,
              homeTeamGoals: groupMatch.homeTeamGoals?.toString(),
              awayTeamGoals: groupMatch.awayTeamGoals?.toString(),
            }}
            onSave={onSave}
            onDelete={onDelete}
            isEdit={!!id}
          />
        ) : null}
      </AddPageContainer>
    </Page>
  );
};