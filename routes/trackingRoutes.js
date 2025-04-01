const express = require('express');
const router = express.Router();
const { createTracking, getTrackingHistory } = require('../controllers/trackingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createTracking);
router.get('/', protect, getTrackingHistory);

module.exports = router;
