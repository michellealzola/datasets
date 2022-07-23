var airQulityData = [];

window.onload = initialize();

function initialize() {
    
    loadAirQulity();
    searchStationName();
    searchParameter();
    searchValue();
    

}

function loadAirQulity() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "https://data.calgary.ca/resource/g9s5-qhu5.json", true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var rawData = ajax.responseText;
            airQulityData = JSON.parse(rawData);
        }
    }
    ajax.send();
}

function searchStationName() {
    var searchStationName = document.getElementById('search_StationName').value;
    var searchIndex = "station_name";
    var searchStationNameResults = "";

    if (searchStationName != null && searchStationName != "") {
        searchStationNameResults += "<tr>";
        searchStationNameResults += "<th>Station Name</th>";
        searchStationNameResults += "<th>Parameter</th>";
        searchStationNameResults += "<th>Value</th>";
        searchStationNameResults += "<th>Longitude</th>";
        searchStationNameResults += "<th>Latitude</th>";
        searchStationNameResults += "<th>Map</th>";
        searchStationNameResults += "</tr>";

        for (var i = 0; i < airQulityData.length; i++) {
            var thisairQulityData = airQulityData[i];

            if (thisairQulityData[searchIndex] != null && thisairQulityData[searchIndex].startsWith(searchStationName)) {
                
                searchStationNameResults += "<tr>";
                searchStationNameResults += "<td>" + thisairQulityData.station_name + "</td>";
                searchStationNameResults += "<td>" + thisairQulityData.parameter + "</td>";
                searchStationNameResults += "<td>" + thisairQulityData.value + "</td>";
                searchStationNameResults += "<td>" + thisairQulityData.longitude + "</td>";
                searchStationNameResults += "<td>" + thisairQulityData.latitude + "</td>";
                searchStationNameResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchStationNameResults += "</tr>";
            }
        }

    }

    document.getElementById('StationName_results').innerHTML = searchStationNameResults;

}
function searchParameter() {
    var searchParameter = document.getElementById('search_Parameter').value;
    var searchIndex = "parameter";
    var searchParameterResults = "";

    if (searchParameter != null && searchParameter != "") {
        searchParameterResults += "<tr>";
        searchParameterResults += "<th>Station Name</th>";
        searchParameterResults += "<th>Parameter</th>";
        searchParameterResults += "<th>Value</th>";
        searchParameterResults += "<th>Longitude</th>";
        searchParameterResults += "<th>Latitude</th>";
        searchParameterResults += "<th>Map</th>";
        searchParameterResults += "</tr>";

        for (var i = 0; i < airQulityData.length; i++) {
            var thisairQulityData = airQulityData[i];

            if (thisairQulityData[searchIndex] != null && thisairQulityData[searchIndex].startsWith(searchParameter)) {
                
                searchParameterResults += "<tr>";
                searchParameterResults += "<td>" + thisairQulityData.station_name + "</td>";
                searchParameterResults += "<td>" + thisairQulityData.parameter + "</td>";
                searchParameterResults += "<td>" + thisairQulityData.value + "</td>";
                searchParameterResults += "<td>" + thisairQulityData.longitude + "</td>";
                searchParameterResults += "<td>" + thisairQulityData.latitude + "</td>";
                searchParameterResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchParameterResults += "</tr>";
            }
        }

    }

    document.getElementById('Parameter_results').innerHTML = searchParameterResults;

}

function searchValue() {
    var searchValue = document.getElementById('search_Value').value;
    var searchIndex = "value";
    var searchValueResults = "";

    if (searchValue != null && searchValue != "") {
        searchValueResults += "<tr>";
        searchValueResults += "<th>Station Name</th>";
        searchValueResults += "<th>Parameter</th>";
        searchValueResults += "<th>Value</th>";
        searchValueResults += "<th>Longitude</th>";
        searchValueResults += "<th>Latitude</th>";
        searchValueResults += "<th>Map</th>";
        searchValueResults += "</tr>";

        for (var i = 0; i < airQulityData.length; i++) {
            var thisairQulityData = airQulityData[i];

            if (thisairQulityData[searchIndex] != null && thisairQulityData[searchIndex].startsWith(searchValue)) {
                
                searchValueResults += "<tr>";
                searchValueResults += "<td>" + thisairQulityData.station_name + "</td>";
                searchValueResults += "<td>" + thisairQulityData.parameter + "</td>";
                searchValueResults += "<td>" + thisairQulityData.value + "</td>";
                searchValueResults += "<td>" + thisairQulityData.longitude + "</td>";
                searchValueResults += "<td>" + thisairQulityData.latitude + "</td>";
                searchValueResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchValueResults += "</tr>";
            }
        }

    }

    document.getElementById('Value_results').innerHTML = searchValueResults;

}
var lati = parseFloat(airQulityData.latitude);
var long = parseFloat(airQulityData.longitude);
function initMap() {
    new google.maps.Map(document.getElementById("air_quality"), {
        center: { lat: lati , lng: long },
        zoom: 8,
    });
}
