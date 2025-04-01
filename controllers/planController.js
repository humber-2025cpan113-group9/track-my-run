const Plan = require('../models/Plan');
const { sendNotification } = require('../utils/sendNotification');
const { addToCalendar } = require('../utils/calendarIntegration');

const createPlan = async (req, res) => {
  const { title, distance, date, notes } = req.body;

  const plan = await Plan.create({
    user: req.user._id,
    title,
    distance,
    date,
    notes
  });

  sendNotification(req.user.name, `New run plan: ${title}`);
  addToCalendar(req.user.email, title, date);

  res.status(201).json(plan);
};

const getPlans = async (req, res) => {
  const plans = await Plan.find({ user: req.user._id }).sort({ date: -1 });
  res.json(plans);
};

module.exports = { createPlan, getPlans };
