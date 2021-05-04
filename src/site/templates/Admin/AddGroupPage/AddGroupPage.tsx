import { AdminTable, Button, GroupEditCard } from "components";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { getMatchesFromGroup } from "src/site/redux/actions/groupMatches";
import { Page } from "templates";
import { colours } from "theme";
import { AddButtonContainer, AddPageContainer } from "../styles";
import { GroupPageContainer } from "./AddGroupPage.styled";

interface IAddGroupPage {
  letter: string;
}

export const AddGroupPage = ({ letter }: IAddGroupPage) => {
  const dispatch: AppDispatch = useDispatch();

  const groupMatches = useSelector((state: IRootState) => state.groupMatches);

  const groupMatchesArray = groupMatches.groupMatches
    .filter(match => match.groupLetter === letter)
    .map(groupMatch => ({
      ...groupMatch,
      score: `${groupMatch.homeTeamGoals ?? 0}-${
        groupMatch.awayTeamGoals ?? 0
      }`,
    }));

  useEffect(() => {
    dispatch(getMatchesFromGroup(letter));
  }, []);

  const onSave = () => {};

  const onDelete = () => {};

  return (
    <Page
      title="Add Group"
      isLoggedIn={true}
      adminPages
      backgroundColour={colours.green200}
    >
      <AddPageContainer>
        <GroupPageContainer>
          <GroupEditCard
            group={{ letter }}
            onSave={onSave}
            onDelete={onDelete}
            isEdit={!!letter}
          />
          <AdminTable
            data={groupMatchesArray}
            headers={[
              {
                Header: "ID",
                accessor: "id",
              },
              {
                Header: "Home Team",
                accessor: "homeTeam",
              },
              {
                Header: "Away Team",
                accessor: "awayTeam",
              },
              {
                Header: "Score",
                accessor: "score",
              },
            ]}
            url={`/admin/groups/${letter}`}
            primaryKey="id"
          />
          <AddButtonContainer>
            <Link href={`/admin/groups/${letter}/add`}>
              <Button
                text="Add Group Match"
                onClick={() => {}}
                buttonType={"blue"}
              />
            </Link>
          </AddButtonContainer>
        </GroupPageContainer>
      </AddPageContainer>
    </Page>
  );
};
