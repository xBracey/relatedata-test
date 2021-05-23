import leagueSeed from "./league";
import playerSeed from "./player";
import teamSeed from "./team";
import userSeed from "./user";
import groupSeed from "./group";
import groupMatchSeed from "./groupMatch";
import teamPredictionSeed from "./teamPrediction";
import groupMatchPredictionSeed from "./groupMatchPrediction";
import userLeagueSeed from "./userLeague";

const seedData = async () => {
  await leagueSeed();
  await userSeed();
  await groupSeed();
  await teamSeed();
  await playerSeed();
  await groupMatchSeed();
  await teamPredictionSeed();
  await groupMatchPredictionSeed();
  await userLeagueSeed();
};

export default seedData;
