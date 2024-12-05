const express=require('express');
const { summaryController,paragraphController,chatbotController, jsconverterController, scifiImageController} = require('../controllers/openaiController');

const router=express.Router();
router.post("/summary",summaryController)
router.post("/paragraph",paragraphController)
router.post('/chatbot',chatbotController)
router.post('/jsConverter',jsconverterController);
router.post('/scifiImage',scifiImageController)

module.exports=router;
