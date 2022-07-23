var trafficData = [];

window.onload = initialize();

function initialize() {
    
    loadTrafficData();
    searchIncidentInfo();
    searchQuadrant();
    searchDescription();
    

}

function loadTrafficData() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var rawData = ajax.responseText;
            trafficData = JSON.parse(rawData);
        }
    }
    ajax.send();
}

function searchIncidentInfo() {
    var searchIncident = document.getElementById('search_incident').value;
    var searchIndex = "incident_info";
    var searchIncidentResults = "";

    if (searchIncident != null && searchIncident != "") {
        searchIncidentResults += "<tr>";
        searchIncidentResults += "<th>Incident Information</th>";
        searchIncidentResults += "<th>Description</th>";
        searchIncidentResults += "<th>Quadrant</th>";
        searchIncidentResults += "<th>Longitude</th>";
        searchIncidentResults += "<th>Latitude</th>";
        searchIncidentResults += "<th>Map</th>";
        searchIncidentResults += "</tr>";

        for (var i = 0; i < trafficData.length; i++) {
            var thistrafficData = trafficData[i];

            if (thistrafficData[searchIndex] != null && thistrafficData[searchIndex].startsWith(searchIncident)) {
                
                searchIncidentResults += "<tr>";
                searchIncidentResults += "<td>" + thistrafficData.incident_info + "</td>";
                searchIncidentResults += "<td>" + thistrafficData.description + "</td>";
                searchIncidentResults += "<td>" + thistrafficData.quadrant + "</td>";
                searchIncidentResults += "<td>" + thistrafficData.longitude + "</td>";
                searchIncidentResults += "<td>" + thistrafficData.latitude + "</td>";
                searchIncidentResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?key=AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchIncidentResults += "</tr>";
            }
        }

    }

    document.getElementById('incident_results').innerHTML = searchIncidentResults;


}
function searchQuadrant() {
    var searchQuadrant = document.getElementById('search_quadrant').value;
    var searchIndex = "quadrant";
    var searchQuadrantResults = "";

    if (searchQuadrant != null && searchQuadrant != "") {
        searchQuadrantResults += "<tr>";
        searchQuadrantResults += "<th>Incident Information</th>";
        searchQuadrantResults += "<th>Description</th>";
        searchQuadrantResults += "<th>Quadrant</th>";
        searchQuadrantResults += "<th>Longitude</th>";
        searchQuadrantResults += "<th>Latitude</th>";
        searchQuadrantResults += "<th>Map</th>";
        searchQuadrantResults += "</tr>";

        for (var i = 0; i < trafficData.length; i++) {
            var thistrafficData = trafficData[i];

            if (thistrafficData[searchIndex] != null && thistrafficData[searchIndex].startsWith(searchQuadrant)) {


                searchQuadrantResults += "<tr>";
                searchQuadrantResults += "<td>" + thistrafficData.incident_info + "</td>";
                searchQuadrantResults += "<td>" + thistrafficData.description + "</td>";
                searchQuadrantResults += "<td>" + thistrafficData.quadrant + "</td>";
                searchQuadrantResults += "<td>" + thistrafficData.longitude + "</td>";
                searchQuadrantResults += "<td>" + thistrafficData.latitude + "</td>";
                searchQuadrantResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?key=AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchQuadrantResults += "</tr>";
            }
        }

    }

    document.getElementById('quadrant_results').innerHTML = searchQuadrantResults;
}
var options;

function searchDescription() {
    var searchDescription = document.getElementById('search_description').value;
    var searchIndex = "description";
    var searchDescriptionResults = "";

    if (searchDescription != null && searchDescription != "") {
        searchDescriptionResults += "<tr>";
        searchDescriptionResults += "<th>Incident Information</th>";
        searchDescriptionResults += "<th>Description</th>";
        searchDescriptionResults += "<th>Quadrant</th>";
        searchDescriptionResults += "<th>Longitude</th>";
        searchDescriptionResults += "<th>Latitude</th>";
        searchDescriptionResults += "<th>Map</th>";
        searchDescriptionResults += "</tr>";

        for (var i = 0; i < trafficData.length; i++) {
            var thistrafficData = trafficData[i];

            if (thistrafficData[searchIndex] != null && thistrafficData[searchIndex].startsWith(searchDescription)) {

                searchDescriptionResults += "<tr>";
                searchDescriptionResults += "<td>" + thistrafficData.incident_info + "</td>";
                searchDescriptionResults += "<td>" + thistrafficData.description + "</td>";
                searchDescriptionResults += "<td>" + thistrafficData.quadrant + "</td>";
                searchDescriptionResults += "<td>" + thistrafficData.longitude + "</td>";
                searchDescriptionResults += "<td>" + thistrafficData.latitude + "</td>";
                searchDescriptionResults += "<td>" + "<a target='map' href ='https://maps.googleapis.com/maps/api/js?key=AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchDescriptionResults += "</tr>";

                options = {
                    zoom: 8,
                    center: { lat: parseFloat(thistrafficData.latitude), lng: parseFloat(thistrafficData.latitude)}
                }
            }
        }

    }

    document.getElementById('description_results').innerHTML = searchDescriptionResults;
}



function initMap() {    

    var map = new google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: { lat:lati, lng:long},
        map:map
    })
}
