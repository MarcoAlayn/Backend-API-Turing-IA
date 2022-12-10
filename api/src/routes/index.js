const { Router } = require("express");
const user = require("./user");
const newsletter = require("./newsLetter");
const router = Router();

router.use("/user", user);
router.use("/newsletter", newsletter);

module.exports = router;
