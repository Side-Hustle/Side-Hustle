'use strict'
import App from './../components/App'

const mapController = {
  map: {},
  pos: {lat: 33.979089, lng: -118.422812},
  filteredData: [],
  markers: [], 

  showMap() {
    document.getElementById("map").style.display = "block";
    google.maps.event.trigger(mapController.map, 'resize');
    mapController.map.setCenter(mapController.pos);
    mapController.placeMarkers(mapController.filteredData);
  }, 

  hideMap() {
    document.getElementById("map").style.display = "none";
  },

  populateInfoWindow(marker, infowindow) {
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<div>' + marker.title + '</div>');
      infowindow.open(map, marker);
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
    }
  },
  

  placeMarkers(data) {
    mapController.markers = [];
    data.forEach((loc, index) => {
      let geo = new Promise((resolve, reject) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode( {'address': loc.address}, function(results, status) {
          if (status == 'OK') resolve({lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()});
        });
      })
      .then(data => {
        let marker = new google.maps.Marker({
          position: data,
          title: loc.title,
          animation: google.maps.Animation.DROP,
          id: index
        });
        mapController.markers.push(marker);
        let largeInfowindow = new google.maps.InfoWindow();
        marker.addListener('click', function() {
          let self = this; 
          mapController.populateInfoWindow(self, largeInfowindow);
        });
        marker.setMap(mapController.map);
      });
    }); 
  },

  getDistance(data) {
    let addresses = data.map(item => item.address);
    const service = new google.maps.DistanceMatrixService();
    let promise = new Promise(function(resolve, reject) {
      service.getDistanceMatrix(
      {
        origins: addresses,
        destinations: [mapController.pos],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false,
      }, resolveDistance);
  
    function resolveDistance(response, status) {
      let result = [];
      var addresses = response.rows[0].elements;
      response.rows.forEach((item, index) => {
        if (parseInt(item.elements[0].distance.text) < 15) result.push(data[index]); 
      });
      resolve(result);
      }
    })
    return promise; 
  },
  
  getGeoCode(ad) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode( {'address': ad}, function(results, status) {
      if (status == 'OK') {
        let lat = results[0].geometry.location.lat();
        let lng = results[0].geometry.location.lng();
        let latlng = {lat: lat, lng: lng};
        return latlng; 
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  },
  
  getAddress(geo) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({'location': geo}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
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
      mapController.pos = {lat: position.coords.latitude, lng: position.coords.longitude};
      mapController.map.setCenter(mapController.pos);
    }
  },
  
  setMap(loc) {
    mapController.map = new google.maps.Map(document.getElementById('map'), {
      center: loc,
      zoom: 11,
      mapTypeControl: true 
    });
    mapController.getLocation();
  },

}

module.exports = mapController;
