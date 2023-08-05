import express, {Router} from "express"
import { createChatMessage, getChatMessage } from "../Controller/chatMessageControler"

const router = Router()

router.route("/:userID/:chatID/create-chat-message").post(createChatMessage);
router.route("/:chatID/get-chat-message").get(getChatMessage);

export default router;