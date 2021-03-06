import { Router } from "express";
import {
  createController,
  deleteController,
  editController,
  getController,
} from "../../controllers/userLeague";

export const UserLeague = Router();

UserLeague.post("/create", async (req, res) => {
  const { status, error, response } = await createController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

UserLeague.delete("/:username/:leagueCode", async (req, res) => {
  const { status, error, response } = await deleteController(
    req.params.username,
    req.params.leagueCode
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

UserLeague.put("/:username/:leagueCode", async (req, res) => {
  const { status, error, response } = await editController(
    req.params.username,
    req.params.leagueCode,
    req.body.admin
  );

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

UserLeague.get("/:username", async (req, res) => {
  const { status, error, response } = await getController(req.params.username);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});
