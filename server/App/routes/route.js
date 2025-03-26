let express = require("express");
const { getData ,updateData,delData,addData} = require("../controllers/com");

let router = express.Router();

router.get("/",getData);
router.post("/add",addData);
router.post("/update",updateData);
router.post("/del",delData);

module.exports = router;