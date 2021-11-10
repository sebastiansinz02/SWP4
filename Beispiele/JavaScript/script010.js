console.log("laksdfj");

var Month = {
    name: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Demzember"],
    length: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    space: 35
}

var currentMonth = 0;
var days = ["MO", "DI", "MI", "DO", "FR", "SA", "SO"];
var calenderday = 1;


for (var m = 0; m < 12; m++) {
    document.write("<br>")
    document.write(Month.name[currentMonth] + "<br>")
    for (var i = 0; i < 7; i++) {
        document.write("|&nbsp;" + days[i])
    }

    for (var rows = 0; rows < 5; rows++) {
        document.write("|<br>")

        for (var i = 0; i < 7; i++) {
            if (calenderday <= Month.length[currentMonth]) {
                document.write("|&nbsp" + calenderday + "&nbsp")
            }
            if (calenderday < 10) {
                document.write("&nbsp;&nbsp")
            }
            calenderday++;
            if (calenderday > Month.length[currentMonth]) {
                calenderday = 1;
                for (let i = 0; i < (31 - Month.length[currentMonth]); i++) {
                    document.write("|&nbsp;&nbsp;&nbsp;" + "0" + "&nbsp" + "<br>")
                }
            }

        }
    }
    currentMonth++;
}
