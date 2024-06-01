const express = require("express")
const userController = require("../Controllers/userController")
const generatePdf = require("../Utils/generatePdf")

const router = express.Router()

router.route("/")
      .post(userController.createUser,generatePdf)

router.route("/:id")
      .patch(userController.updateUser,generatePdf)
      .delete(userController.deleteUser)

module.exports = router