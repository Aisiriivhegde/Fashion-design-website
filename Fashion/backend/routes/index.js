const express= require("express");
const router= express.Router();
const postTshirtDesignController=require("../controller/adddesign");



router.post("/save-design",postTshirtDesignController);
module.exports=router;