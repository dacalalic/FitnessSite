function initMap() { 
    var uluru = {lat: 44.818968499999996, lng: 20.4121194}; 
    var map = new google.maps.Map(document.getElementById('map'), { 
      zoom: 12, 
      center: uluru 
    }); 
    var marker = new google.maps.Marker({ 
      position: uluru, 
      map: map 
    }); 
  } 