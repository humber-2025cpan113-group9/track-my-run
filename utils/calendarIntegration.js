function addToCalendar(userEmail, eventTitle, date) {
    console.log(`[Calendar] Event "${eventTitle}" scheduled for ${userEmail} on ${date}`);
  }
  
  module.exports = { addToCalendar };
  