var body = $("body");
var input = $("input");

function append(el) {
	body.append(el.months);
	body.append(el.holidays);
}

function Season(months, holidays, color) {
	this.months = "<h1>" + months.join(", ") + "</h1>";
	this.holidays = "<h1>" + holidays.join(", ") + "</h1>";
	this.color = body.css("background", color);
}

function printSeason(interest) {
	var season = new Season(interest[0], interest[1], interest[2]);
	append(season);
}

var winter = [["December", "January", "February"], ["Hannukah", "Ramadan", "Christmas", "Kwanza", "New Year"], "lightBlue"];

var spring = [["March", "April", "May"], ["Mardi Gras", "Easter", "Purim", "Passover", "Earth Day", "Cinco De Mayo", "Mother's Day"], "green"]

var summer = [["June", "July", "August"], ["Father's Day", "Independence Day"], "yellow"]

var autumn = [["September", "October", "November"], ["Rosh Hashanah", "Yom Kippur", "Columbus Day", "Halloween", "Day of the Dead", "All Soul's Day", "Veteran's Day", "Thanksgiving"], "red"]

var seasons = {
	winter: winter,
	spring: spring,
	summer: summer,
	autumn: autumn
}

input.on("change", function() {
	console.log(this);
	if (!seasons[this.value]) {
		body.append(this.value + " is not a season! Try again.")
		return
	}
	printSeason(seasons[this.value]);
});

// The following code is for reference...
//
// interest = prompt("What is your favorite season?");
// printSeason(seasons[interest])

// if (interest === "winter") {
// 	printSeason(winter)
// } else if (interest === "spring") {
// 	printSeason(spring)
// } else if (interest === "summer") {
// 	printSeason(summer)
// } else if (interest === "autumn" || "fall") {
// 	printSeason(autumn)
// }