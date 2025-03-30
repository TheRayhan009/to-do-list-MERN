let express = require("express");
const { getData ,updateData,delData,addData , comTask} = require("../controllers/com");

let router = express.Router();

router.get("/",getData);
router.post("/add",addData);
router.post("/update",updateData);
router.post("/del",delData);
router.post("/comtask",comTask);

module.exports = router;