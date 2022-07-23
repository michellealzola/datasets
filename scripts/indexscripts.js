//start of traffic incidents
function showTraffic() {
    var ajax_traffic = new XMLHttpRequest();

    ajax_traffic.open("GET", "./traffic.html", true);

    ajax_traffic.onreadystatechange = function () {
        if (ajax_traffic.readyState == 4 && ajax_traffic.status == 200) {
            var response_traffic = ajax_traffic.responseText;
            document.getElementById('traffic').innerHTML = response_traffic;
        }
    };
    ajax_traffic.send();
}


//end of traffic incidents-------------------

//start of BuildingPermits
function showBuildingPermits() {
    var ajax_Crimes = new XMLHttpRequest();

    ajax_Crimes.open("GET", "./buildingpermits.html", true);

    ajax_Crimes.onreadystatechange = function () {
        if (ajax_Crimes.readyState == 4 && ajax_Crimes.status == 200) {
            var response_Crimes = ajax_Crimes.responseText;
            document.getElementById('building_permits').innerHTML = response_Crimes;
        }
    };
    ajax_Crimes.send();
}
//end of BuildingPermits-------------------

//start of Air Quality Data (near real-time)
function showAirQuality() {
    var ajax_Crimes = new XMLHttpRequest();

    ajax_Crimes.open("GET", "./airquality.html", true);

    ajax_Crimes.onreadystatechange = function () {
        if (ajax_Crimes.readyState == 4 && ajax_Crimes.status == 200) {
            var response_Crimes = ajax_Crimes.responseText;
            document.getElementById('air_quality').innerHTML = response_Crimes;
        }
    };
    ajax_Crimes.send();
}
//end of Air Quality Data (near real-time)-------------------

//start of Short Term Rentals
function showRentals() {
    var ajax_Crimes = new XMLHttpRequest();

    ajax_Crimes.open("GET", "./rentals.html", true);

    ajax_Crimes.onreadystatechange = function () {
        if (ajax_Crimes.readyState == 4 && ajax_Crimes.status == 200) {
            var response_Crimes = ajax_Crimes.responseText;
            document.getElementById('short_rentals').innerHTML = response_Crimes;
        }
    };
    ajax_Crimes.send();
}
//end of Short Term Rentals-------------------
