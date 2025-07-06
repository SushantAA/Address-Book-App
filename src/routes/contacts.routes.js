//libs
import { Router } from "express";

//controllers
import {
  createContacts,
  updateContacts,
  deleteContacts,
  searchContacts,
} from "../controllers/contacts.controller.js";

const router = Router();

router.route("/create").post(createContacts);
router.route("/update").put(updateContacts);
router.route("/delete").delete(deleteContacts);
router.route("/search").post(searchContacts);

export default router;
