import express, {Router} from "express"
import {  beFriend, unFriend } from "../Controller/FriendController";

const router = express.Router();

router.route("/:userId/:friendID/be-friend").post(beFriend)
router.route("/:userId/:friendID/un-friend").post(unFriend)

export default router