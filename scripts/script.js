//validate the calendar 
document.getElementById("calendar-btn").addEventListener("click", function validateForm(){
    
    const day = document.querySelector('.slider').dataset.day;
    const workout = document.getElementById(`${day}-distance`).value;
    const distance = document.getElementById(`${day}-distance`).value;
    
    console.log(day);
    console.log(workout);
    console.log(distance);

    if (day === "" || workout === "" || distance === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
})


//user friendly slider 
document.addEventListener("DOMContentLoaded", () => {
    const mileageSliders = document.querySelectorAll(".milage");
  
    mileageSliders.forEach(slider => {
      const day = slider.dataset.day;
      const display = document.getElementById(`${day}-distance`);
  
      slider.addEventListener("input", () => {
        display.textContent = `${slider.value} km`;
      });
    });
  
  
  });