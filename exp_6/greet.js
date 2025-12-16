function showMessage() {
    let userName = document.getElementById("name").value;
    let userMood = document.getElementById("mood").value;
    let output = document.getElementById("message");

    if (userName === "" || userMood === "") {
        output.textContent = "Please fill all fields.";
        return;
    }

    let hour = new Date().getHours();
    let greeting = hour < 12 ? "Good Morning" :
                   hour < 18 ? "Good Afternoon" :
                               "Good Evening";

    let moodMessage = {
        happy: "😁 You're glowing with happiness!",
        sad: "😔 It's okay, better days are coming.",
        excited: "🔥 Love the energy! Keep going!",
        sleepy: "😴 Time for rest maybe?"
    };

    output.textContent = `${greeting} ${userName}! ${moodMessage[userMood]}`;

    // Reset previous animation
    output.style.opacity = "1";
    output.style.animationName = "";

    // Apply unique animation based on mood
    setTimeout(() => {
        if (userMood === "happy") output.style.animationName = "happyBounce";
        if (userMood === "sad") output.style.animationName = "sadDrop";
        if (userMood === "excited") output.style.animationName = "excitedPunch";
        if (userMood === "sleepy") output.style.animationName = "sleepySlow";
    }, 50);
}
