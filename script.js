//your JS code here. If required.
function updateTime(){
	var currentTime = new Date();
	var targetDate = new Date("February 27, 2024 13:04:54")
	var timeDifference = targetDate.getTime()-currentTime.getTime();
	var days = Math.floor(timeDifference/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Format the date
    var formattedDate = targetDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
    var formattedTime = targetDate.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

    // Display the timer on the page
    var timerElement = document.getElementById("timer");
    timerElement.innerHTML = formattedDate + ", " + formattedTime;

    // Call the updateTimer function again after 1 second
    setTimeout(updateTimer, 1000);)
}