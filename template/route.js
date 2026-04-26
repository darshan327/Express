  import express from 'express'
  import { homeController } from "./control/homeController.js";
  import { aboutController } from "./control/aboutController.js";

  const router = express.Router();

  router.get("/", homeController);
  router.get("about",aboutController);

  export  default router;