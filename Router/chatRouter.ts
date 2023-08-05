import express, { Router } from "express";
import { createChat, getChat, getSpecifiicChat } from "../Controller/chatController";

const router = express.Router();

router.route("/:userId/:friendID/create-chat").post(createChat);
router.route("/:userId/:friendID/get-a-chat").post(getSpecifiicChat);
router.route("/:userid/get-chat").get(getChat)

export default router;
