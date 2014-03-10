
day = prompt("How was your day on a scale from 1-10?");
if (day < 1) {
	console.log("Yikes! Have a little hope! Haven't you heard of the Law of Attraction?");
} else if (day <= 5) {
	console.log("Could be better, eh? What are you waiting for?")
} else if (day <= 10) {
	console.log("Not too shabby!")
} else if (day > 10) {
	console.log("OFF THE CHARTS?! I want what you're having!")
} else {
	console.log("It was a simple question.")
}