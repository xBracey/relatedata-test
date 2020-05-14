import express from "express";
import { sequelize } from "./models";
import seedData from "./seeders";
import { cve } from "./routes";

const app = express();
const port = 3000;
const force = process.env.FORCE === "true";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/cve", cve);

sequelize.sync({ force }).then(async () => {
  if (force) {
    await seedData();
  }

  app.listen(port);
});

export default app;
