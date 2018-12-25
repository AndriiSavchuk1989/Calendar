window.onload = function () {
	var monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	var calendar = document.getElementsByClassName("calendar")[0];
	var month, spanMonth, divDays, spanDay, divDate, dateSpan, daysInMonth, date, dayIterator, monthIterator = 0,
		year = 2018;

	for (var _month = 0; _month < monthes.length; _month++) {
		month = document.createElement("div"); // создаем блок для месяца
		spanMonth = document.createElement("span"); // создаем заголовок для блока месяца
		spanMonth.setAttribute("class", "month"); // задаем заголовку class
		spanMonth.appendChild(document.createTextNode(monthes[_month])); // вставляем в span название месяца
		month.appendChild(spanMonth); // вставляем в блок месяца навзание 
		month.setAttribute("class", monthes[_month]); // задаем class с названием месяца
		calendar.appendChild(month); // вставляем в обертку блок месяца

		divDays = document.createElement("div"); // создаем блок для вставки дней недели
		divDays.setAttribute("class", "days"); // задаем class блоку в котором находятся дни недели
		month.appendChild(divDays); // вставляем в блок месяца блок дней недели


		divDate = document.createElement("div"); // создаем блок для дат
		divDate.setAttribute("class", "dates"); // задаем class для блока дат

		// заполняем блок для дат Mon ... Sun
		for (var day = 0; day < days.length; day++) {
			spanDay = document.createElement("span");
			spanDay.setAttribute("class", "day_of_the_week");
			spanDay.appendChild(document.createTextNode(days[day]));
			divDays.appendChild(spanDay);
		}

		daysInMonth = daysCount(_month); // считем сколько дней в месяце
		var dayOfTheWeek = document.getElementsByClassName("day_of_the_week");
		dayIterator = 0;
		for (var _date = 1; _date <= daysInMonth; _date++) {

			for (var counter = dayIterator; counter <= dayIterator; counter++) {
				console.log(dayOfTheWeek[counter].innerText);
				console.log(new Date(year, _month, _date));

				if (new RegExp(dayOfTheWeek[counter].innerText).test(new Date(year, _month, _date))) {
					dateSpan = document.createElement("span");
					dateSpan.setAttribute("class", "date");
					dateSpan.appendChild(document.createTextNode(_date));
					divDate.appendChild(dateSpan);
					month.appendChild(divDate);
				} else if ((new RegExp(dayOfTheWeek[counter].innerText).test(new Date(year, _month, _date = +1)))) {
					dateSpan = document.createElement("span");
					dateSpan.setAttribute("class", "date");
					dateSpan.appendChild(document.createTextNode(_date));
					divDate.appendChild(dateSpan);
					month.appendChild(divDate);
				} else {
					dateSpan = document.createElement("span");
					dateSpan.setAttribute("class", "date");
					dateSpan.appendChild(document.createTextNode(" "));
					divDate.appendChild(dateSpan);
					month.appendChild(divDate);
				}

			}
			if (dayIterator == 6) {
				dayIterator = 0;
			} else {
				dayIterator++;
			}

		}
	}

	function daysCount(_monthes) { // month from 0 to 11
		d = 32 - new Date(year, _monthes, 32).getDate();
		return d;
		//console.log(daysInMonth);
	};

	function accordingDatesToDays(_monthes, _date, _divDays) { // _monthes 0...11, _date 0...6
		if (new RegExp(_divDays).test(new Date(2018, _monthes, _date))) {
			fillDays(_monthes);
		}
	};

	//var dayOfTheWeek = document.getElementsByClassName("day_of_the_week");
	//console.log(dayOfTheWeek[0].innerText);

};