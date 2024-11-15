import { createAdmin,createAlumni,createStudent,getAllUsers } from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/companyControllers.js";
import { createReview, getAllReviews } from "../controllers/reviewControllers.js";
import { likeReviews } from "../controllers/likeControllers.js";

import express from "express";
import { isAdmin, isstudent } from "../middleware/Middleware.js";
const router=express.Router()


router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)
router.post("/company/create",isAdmin,createCompany)
router.post("/review/create",createReview)
router.post("/likes/create",isstudent,likeReviews)
router.get("/getAllUsers/get",getAllUsers)
router.get("/company/get",getCompanies)
router.get("/review/get",getAllReviews)

export default router;