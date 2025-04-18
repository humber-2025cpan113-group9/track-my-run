// Validate new post form
function validateForm() {
    let goalDistance = document.getElementById("target-distance").value;
    let day = document.getElementById("day").value;
    let goalTime = document.getElementById("goal-time").value;
    

    if (goalDistance === "" || day === "" ||goalTime === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    let quiz = document.getElementById("fitness-quiz");
    if(quiz){
        quiz.addEventListener("submit", function(event){
            if (!validateForm()){
                event.preventDefault();
                return;

            }

            let post= { 
                goalDistance: document.getElementById("target-distance").value,
                day: document.getElementById("day").value,
                goalTime: document.getElementById("goal-time").value
            };
            localStorage.setItem("newWorkout",JSON.stringify(post));
            windows.location.href = "assessment.html"
        });

    } else {
        console.error("quiz not found");
    }
});
