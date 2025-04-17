document.addEventListener("DOMContentLoaded", () => {
    const mileageSliders = document.querySelectorAll(".milage");
    const timeSliders = document.querySelectorAll(".time");
  
    mileageSliders.forEach(slider => {
      const day = slider.dataset.day;
      const display = document.getElementById(`${day}-distance`);
  
      slider.addEventListener("input", () => {
        display.textContent = `${slider.value} km`;
      });
    });
  
    timeSliders.forEach(slider => {
      const day = slider.dataset.day;
      const display = document.getElementById(`${day}-time`);
  
      slider.addEventListener("input", () => {
        display.textContent = `${slider.value} min`;
      });
    });
  });