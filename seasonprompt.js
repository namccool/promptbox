function Season(months, holidays) {
	this.months = months;
	this.holidays = holidays;
	}

var winter = new Season(["December", "January", "February"], ["Hannukah", "Ramadan", "Christmas", "Kwanza", "New Year"]);

var spring = new Season(["March", "April", "May"], ["Mardi Gras", "Easter", "Purim", "Passover", "Earth Day", "Cinco De Mayo", "Mother's Day"])

var summer = new Season(["June", "July", "August"], ["Father's Day", "Independence Day", ])

var autumn = new Season(["September", "October", "November"], ["Rosh Hashanah", "Yom Kippur", "Columbus Day", "Halloween", "Day of the Dead", "All Soul's Day", "Veteran's Day", "Thanksgiving"])

interest = prompt("What is you favorite season?");
if (interest = winter) {
	console.log(winter)
} else if (interest = spring) {
	console.log(spring)
} else if (interest = summer) {
	console.log(summer)
} else if (interest = autumn) {
	console.log(autumn)
}