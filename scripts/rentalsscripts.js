var rentalsData = [];

window.onload = initialize();

function initialize() {
    
    loadRentals();
    searchBusinessId();
    searchResidence();
    searchStatus();
   
    

}

function loadRentals() {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "https://data.calgary.ca/resource/gzkz-5k9a.json", true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var rawData = ajax.responseText;
            rentalsData = JSON.parse(rawData);
        }
    }
    ajax.send();
}

function searchBusinessId() {
    var searchBusinessId = document.getElementById('search_BusinessId').value;
    var searchIndex = "business_id";
    var searchBusinessIdResults = "";

    if (searchBusinessId != null && searchBusinessId != "") {
        searchBusinessIdResults += "<tr>";
        searchBusinessIdResults += "<th>Business ID</th>";
        searchBusinessIdResults += "<th>Type of Residence</th>";
        searchBusinessIdResults += "<th>Status</th>";
        searchBusinessIdResults += "<th>Longitude</th>";
        searchBusinessIdResults += "<th>Latitude</th>";
        searchBusinessIdResults += "<th>Map</th>";
        searchBusinessIdResults += "</tr>";

        for (var i = 0; i < rentalsData.length; i++) {
            var thisrentalsData = rentalsData[i];

            if (thisrentalsData[searchIndex] != null && thisrentalsData[searchIndex].startsWith(searchBusinessId)) {
                
                searchBusinessIdResults += "<tr>";
                searchBusinessIdResults += "<td>" + thisrentalsData.business_id + "</td>";
                searchBusinessIdResults += "<td>" + thisrentalsData.type_of_residence + "</td>";
                searchBusinessIdResults += "<td>" + thisrentalsData.status_description + "</td>";
                searchBusinessIdResults += "<td>" + thisrentalsData.longitude + "</td>";
                searchBusinessIdResults += "<td>" + thisrentalsData.latitude + "</td>";
                searchBusinessIdResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchBusinessIdResults += "</tr>";
            }
        }

    }

    document.getElementById('BusinessId_results').innerHTML = searchBusinessIdResults;

}

function searchResidence() {
    var searchResidence = document.getElementById('search_Residence').value;
    var searchIndex = "type_of_residence";
    var searchResidenceResults = "";

    if (searchResidence != null && searchResidence != "") {
        searchResidenceResults += "<tr>";
        searchResidenceResults += "<th>Business ID</th>";
        searchResidenceResults += "<th>Type of Residence</th>";
        searchResidenceResults += "<th>Status</th>";
        searchResidenceResults += "<th>Longitude</th>";
        searchResidenceResults += "<th>Latitude</th>";
        searchResidenceResults += "<th>Map</th>";
        searchResidenceResults += "</tr>";

        for (var i = 0; i < rentalsData.length; i++) {
            var thisrentalsData = rentalsData[i];

            if (thisrentalsData[searchIndex] != null && thisrentalsData[searchIndex].startsWith(searchResidence)) {
                
                searchResidenceResults += "<tr>";
                searchResidenceResults += "<td>" + thisrentalsData.business_id + "</td>";
                searchResidenceResults += "<td>" + thisrentalsData.type_of_residence + "</td>";
                searchResidenceResults += "<td>" + thisrentalsData.status_description + "</td>";
                searchResidenceResults += "<td>" + thisrentalsData.longitude + "</td>";
                searchResidenceResults += "<td>" + thisrentalsData.latitude + "</td>";
                searchResidenceResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchResidenceResults += "</tr>";
            }
        }

    }

    document.getElementById('Residence_results').innerHTML = searchResidenceResults;

}

function searchStatus() {
    var searchStatus = document.getElementById('search_Status').value;
    var searchIndex = "status_description";
    var searchStatusResults = "";

    if (searchStatus != null && searchStatus != "") {
        searchStatusResults += "<tr>";
        searchStatusResults += "<th>Business ID</th>";
        searchStatusResults += "<th>Type of Residence</th>";
        searchStatusResults += "<th>Status</th>";
        searchStatusResults += "<th>Longitude</th>";
        searchStatusResults += "<th>Latitude</th>";
        searchStatusResults += "<th>Map</th>";
        searchStatusResults += "</tr>";

        for (var i = 0; i < rentalsData.length; i++) {
            var thisrentalsData = rentalsData[i];

            if (thisrentalsData[searchIndex] != null && thisrentalsData[searchIndex].startsWith(searchStatus)) {
                
                searchStatusResults += "<tr>";
                searchStatusResults += "<td>" + thisrentalsData.business_id + "</td>";
                searchStatusResults += "<td>" + thisrentalsData.type_of_residence + "</td>";
                searchStatusResults += "<td>" + thisrentalsData.status_description + "</td>";
                searchStatusResults += "<td>" + thisrentalsData.longitude + "</td>";
                searchStatusResults += "<td>" + thisrentalsData.latitude + "</td>";
                searchStatusResults += "<td>" + "<a target='_blank' href ='https://maps.googleapis.com/maps/api/js?AIzaSyCh7O6KgNbUXnOEIXoYDxfpli5rxsNzbl0&callback=initMap'>" + "click for location" + "</a>" + "</td>";
                searchStatusResults += "</tr>";
            }
        }

    }

    document.getElementById('Status_results').innerHTML = searchStatusResults;

}

var lati = parseFloat(rentalsData.latitude);
var long = parseFloat(rentalsData.longitude);
function initMap() {
    new google.maps.Map(document.getElementById("short_rentals"), {
        center: { lat: lati , lng: long },
        zoom: 8,
    });
}
