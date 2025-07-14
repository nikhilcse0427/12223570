import { Router } from "express";

const router = Router()

router.post('/register', userController.userRegisteration)
router.post('/login', userController.userLogin)

export default router
