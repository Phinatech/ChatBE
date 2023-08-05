import express, {Router} from "express"
import { DeleteUser, createUser, getOneUser, getUser, loginUser, updateUser } from "../Controller/user.Controller"

const router = Router()

router.route("/getUser").get(getUser)
router.route("/id/get-one-user").get(getOneUser);
router.route("/:id/update-user").patch(updateUser);
router.route("/:id/delete-user").delete(DeleteUser);
router.route("/create-user").post(createUser)
router.route("login").post(loginUser)

export default router
