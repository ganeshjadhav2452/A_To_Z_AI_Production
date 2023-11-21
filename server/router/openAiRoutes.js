const express = require('express')
const { paragraphController,
    chatbotController,
    scifiImageController,
    jsconverterController,
    summaryController } = require('../controllers/openAiControllers')
const errorMiddleware = require('../middlewares/errorMiddleware')
const router = express.Router()
const allowCors = require('../middlewares/allowCors')
//route
router.post("/summary", allowCors, summaryController, errorMiddleware);
router.post("/paragraph", paragraphController, errorMiddleware);
router.post("/chatbot", chatbotController, errorMiddleware);
router.post("/js-converter", jsconverterController, errorMiddleware);
router.post("/scifi-image", scifiImageController, errorMiddleware);



module.exports = router;