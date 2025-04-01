const Tracking = require('../models/Tracking');
const { sendNotification } = require('../utils/sendNotification');

const createTracking = async (req, res) => {
  const { distance, duration, date, notes } = req.body;

  const tracking = await Tracking.create({
    user: req.user._id,
    distance,
    duration,
    date,
    notes
  });

  sendNotification(req.user.name, `New tracking added: ${distance}km in ${duration}min`);

  res.status(201).json(tracking);
};

const getTrackingHistory = async (req, res) => {
  const history = await Tracking.find({ user: req.user._id }).sort({ date: -1 });
  res.json(history);
};

module.exports = { createTracking, getTrackingHistory };
