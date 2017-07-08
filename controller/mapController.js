'use strict'

const mapController = {
  map: {},
  pos: {},

  showMap() {
    document.getElementById("map").style.display = "block";
    google.maps.event.trigger(mapController.map, 'resize');
    mapController.map.setCenter(mapController.pos);
  }, 

  getDistance() {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin2],
        destinations: [destinationA, destinationB],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false,
      }, resolveDistance);
  
    function resolveDistance(response, status) {
      var addresses = response.rows[0].elements;
      addresses.forEach(item => {
        console.log(item.distance.text);
      });
    }
  },
  
  getGeoCode() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': destinationA}, function(results, status) {
      if (status == 'OK') {
        console.log(results[0].geometry.location.lat());
            console.log(results[0].geometry.location.lng());
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  },
  
  getAddress() {
    const geocoder = new google.maps.Geocoder();
    var latlng = {lat: 37.904538, lng: -122.17094299999997};
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[1]) {
          console.log(results[0].formatted_address);
        } else {
          window.alert('No results found');
        }
      } else {
      window.alert('Geocoder failed due to: ' + status);
      }
    });
  },
  
  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  
    function showPosition(position) {
       console.log('position is', position.coords);
       mapController.setMap({lat: position.coords.latitude, lng: position.coords.longitude});
    }
  },
  
  initMap() {
    const currentLocation = mapController.getLocation();
  },
  
  setMap(loc) {
    mapController.pos = loc; 

    mapController.map = new google.maps.Map(document.getElementById('map'), {
      center: loc,
      zoom: 11,
      mapTypeControl: true 
    });
  },

}

module.exports = mapController;
