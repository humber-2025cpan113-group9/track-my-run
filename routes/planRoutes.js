const express = require('express');
const router = express.Router();
const { createPlan, getPlans } = require('../controllers/planController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createPlan);
router.get('/', protect, getPlans);

module.exports = router;
