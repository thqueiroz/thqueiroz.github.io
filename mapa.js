var initialCoordinates = [-20.459198, -40.376661]; 
var initialZoomLevel = 13;

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);
  

    var x=document.getElementById("demo");
    function getLocation()
      {
      if (navigator.geolocation)
        {
        navigator.geolocation.getCurrentPosition(showPosition);
        }
      else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
      }
    function showPosition(position)
      { 
        var muxiCoordinates = [position.coords.latitude, position.coords.longitude];
        var muxiMarkerMessage = "Posicao Atual";

        L.marker(muxiCoordinates).addTo(map)
        .bindPopup(muxiMarkerMessage)
        .openPopup();

      
      }
      var uvvmensagem = "Universidade Vila Velha";
      var uvv = [-20.353767, -40.299253];

  function addMarcador() {
    L.marker(uvv).addTo(map)
    .bindPopup(uvvmensagem)
    .openPopup();

  }

  function removeMarcador() {
    map.removeLayer(uvv);
  }
    
    
  var rodents =   L.geoJson(data,{
    pointToLayer: function(feature,latlng){
      var marker = L.marker(latlng,{icon: ratIcon});
      marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT);
      return marker;
    }
  });
   var clusters = L.markerClusterGroup();
  clusters.addLayer(rodents);
  map.addLayer(clusters); 
  

