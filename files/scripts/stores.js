  mapStyles = [
  {
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#fafafa" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#db101d" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#db1013" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      { "saturation": -100 }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#ebf3ff" }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "color": "#808080" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#ffffff" }
    ]
  }
];

function mapSofiaInitialize() {

	var styledMap = new google.maps.StyledMapType(mapStyles,
    {name: "Кухни Диалог"});
	var latlng =  new google.maps.LatLng(42.651607, 23.392419);
	var mapOptions = {
		zoom: 16,
		scrollwheel: false,
		center: latlng,
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	};
	map = new google.maps.Map(document.getElementById('map-sofia'), mapOptions);
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	var image = 'images/map-pin.png';
  	var myLatLng = new google.maps.LatLng(42.651607, 23.392419);
 	var beachMarker = new google.maps.Marker({
      position: myLatLng,
	  draggable:true,
      animation: google.maps.Animation.DROP,
      map: map,
      icon: image
  });
  google.maps.event.addListener(beachMarker, 'click', toggleBounce);
}

function mapPlovdivInitialize() {
	var styledMap = new google.maps.StyledMapType(mapStyles,
    {name: "Кухни Диалог"});
	var latlng =  new google.maps.LatLng(42.142310, 24.783890);
	var mapOptions = {
		zoom: 16,
		scrollwheel: false,
		center: latlng,
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	};
	map = new google.maps.Map(document.getElementById('map-plovdiv'), mapOptions);
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	var image = 'images/map-pin.png';
  	var myLatLng = new google.maps.LatLng(42.142310, 24.783890);
 	var beachMarker = new google.maps.Marker({
      position: myLatLng,
	  draggable:true,
      animation: google.maps.Animation.DROP,
      map: map,
      icon: image
  });
  google.maps.event.addListener(beachMarker, 'click', toggleBounce);
}

function toggleBounce() {
	if (beachMarker.getAnimation() != null) {
		beachMarker.setAnimation(null);
	} else {
		beachMarker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

$(document).ready(function() {
  mapSofiaInitialize();
  mapPlovdivInitialize();
});