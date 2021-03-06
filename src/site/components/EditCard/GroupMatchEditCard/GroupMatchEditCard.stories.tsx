import React from "react";
import { GroupMatchEditCard } from "./GroupMatchEditCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/EditCard/GroupMatchEditCard", module);

story.add("GroupMatchEditCard Component", () => (
  <GroupMatchEditCard
    teamNames={["England", "Belgium", "Denmark", "Spain"]}
    groupMatch={{
      date: "",
      homeTeam: null,
      awayTeam: null,
      homeGoals: "",
      awayGoals: "",
    }}
    onSave={action("Save")}
    onDelete={action("Delete")}
    isEdit={boolean("Is Edit", false)}
  />
));
