import { Router } from "express";
import * as controller from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router();

router.get("/players", controller.getPlayer);
router.get("/players/:id", controller.getPlayerById);
router.post("/players", controller.postPlayer);
router.delete("/players/:id", controller.deletePlayer);
router.patch("/players/:id", controller.updatePlayer);

router.get("/clubs", getClubs);

export default router;