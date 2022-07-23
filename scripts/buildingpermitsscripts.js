var buildingPermitsData = [];

window.onload = initialize();

function initialize() {
    
    loadBuildingPermits();
    searchPermitNumber();
    searchCurrentStatus();
    searchPermitType();

}

function loadBuildingPermits() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var rawData = ajax.responseText;
            buildingPermitsData = JSON.parse(rawData);
        }
    }
    ajax.send();
}

function searchPermitNumber() {
    var searchPermitNumber = document.getElementById('search_PermitNumber').value;
    var searchIndex = "permitnum";
    var searchPermitNumberResults = "";

    if (searchPermitNumber != null && searchPermitNumber != "") {
        searchPermitNumberResults += "<tr>";
        searchPermitNumberResults += "<th>Permit Number</th>";
        searchPermitNumberResults += "<th>Current Status</th>";
        searchPermitNumberResults += "<th>Type of Permit</th>";
        searchPermitNumberResults += "<th>Longitude</th>";
        searchPermitNumberResults += "<th>Latitude</th>";
        searchPermitNumberResults += "<th>Map</th>";
        searchPermitNumberResults += "</tr>";

        for (var i = 0; i < trafficData.length; i++) {
            var thisbuildingPermitsData = buildingPermitsData[i];

            if (thisbuildingPermitsData[searchIndex] != null && thisbuildingPermitsData[searchIndex].startsWith(searchPermitNumber)) {
                
                searchPermitNumberResults += "<tr>";
                searchPermitNumberResults += "<td>" + thisbuildingPermitsData.permitnum + "</td>";
                searchPermitNumberResults += "<td>" + thisbuildingPermitsData.statuscurrent + "</td>";
                searchPermitNumberResults += "<td>" + thisbuildingPermitsData.permittype + "</td>";
                searchPermitNumberResults += "<td>" + thisbuildingPermitsData.longitude + "</td>";
                searchPermitNumberResults += "<td>" + thisbuildingPermitsData.latitude + "</td>";
                searchPermitNumberResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchPermitNumberResults += "</tr>";
            }
        }

    }

    document.getElementById('PermitNumber_results').innerHTML = searchPermitNumberResults;

}

function searchCurrentStatus() {
    var searchCurrentStatus = document.getElementById('search_CurrentStatus').value;
    var searchIndex = "statuscurrent";
    var searchCurrentStatusResults = "";

    if (searchCurrentStatus != null && searchCurrentStatus != "") {
        searchCurrentStatusResults += "<tr>";
        searchCurrentStatusResults += "<th>Permit Number</th>";
        searchCurrentStatusResults += "<th>Current Status</th>";
        searchCurrentStatusResults += "<th>Type of Permit</th>";
        searchCurrentStatusResults += "<th>Longitude</th>";
        searchCurrentStatusResults += "<th>Latitude</th>";
        searchCurrentStatusResults += "<th>Map</th>";
        searchCurrentStatusResults += "</tr>";

        for (var i = 0; i < trafficData.length; i++) {
            var thisbuildingPermitsData = buildingPermitsData[i];

            if (thisbuildingPermitsData[searchIndex] != null && thisbuildingPermitsData[searchIndex].startsWith(searchCurrentStatus)) {
                
                searchCurrentStatusResults += "<tr>";
                searchCurrentStatusResults += "<td>" + thisbuildingPermitsData.permitnum + "</td>";
                searchCurrentStatusResults += "<td>" + thisbuildingPermitsData.statuscurrent + "</td>";
                searchCurrentStatusResults += "<td>" + thisbuildingPermitsData.permittype + "</td>";
                searchCurrentStatusResults += "<td>" + thisbuildingPermitsData.longitude + "</td>";
                searchCurrentStatusResults += "<td>" + thisbuildingPermitsData.latitude + "</td>";
                searchCurrentStatusResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchCurrentStatusResults += "</tr>";
            }
        }

    }

    document.getElementById('CurrentStatus_results').innerHTML = searchCurrentStatusResults;

}

function searchPermitType() {
    var searchPermitType = document.getElementById('search_PermitType').value;
    var searchIndex = "permittype";
    var searchPermitTypeResults = "";

    if (searchPermitType != null && searchPermitType != "") {
        searchPermitTypeResults += "<tr>";
        searchPermitTypeResults += "<th>Permit Number</th>";
        searchPermitTypeResults += "<th>Current Status</th>";
        searchPermitTypeResults += "<th>Type of Permit</th>";
        searchPermitTypeResults += "<th>Longitude</th>";
        searchPermitTypeResults += "<th>Latitude</th>";
        searchPermitTypeResults += "<th>Map</th>";
        searchPermitTypeResults += "</tr>";

        for (var i = 0; i < trafficData.length; i++) {
            var thisbuildingPermitsData = buildingPermitsData[i];

            if (thisbuildingPermitsData[searchIndex] != null && thisbuildingPermitsData[searchIndex].startsWith(searchPermitType)) {
                
                searchPermitTypeResults += "<tr>";
                searchPermitTypeResults += "<td>" + thisbuildingPermitsData.permitnum + "</td>";
                searchPermitTypeResults += "<td>" + thisbuildingPermitsData.statuscurrent + "</td>";
                searchPermitTypeResults += "<td>" + thisbuildingPermitsData.permittype + "</td>";
                searchPermitTypeResults += "<td>" + thisbuildingPermitsData.longitude + "</td>";
                searchPermitTypeResults += "<td>" + thisbuildingPermitsData.latitude + "</td>";
                searchPermitTypeResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchPermitTypeResults += "</tr>";
            }
        }

    }

    document.getElementById('PermitType_results').innerHTML = searchPermitTypeResults;

}

var lati = parseFloat(buildingPermitsData.latitude);
var long = parseFloat(buildingPermitsData.longitude);
function initMap() {
    new google.maps.Map(document.getElementById("building_permits"), {
        center: { lat: lati , lng: long },
        zoom: 8,
    });
}
