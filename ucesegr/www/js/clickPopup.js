// The script is based on the code provided in weekly tutorials of Web&Mobile GIS CEGEG077

// create a custom popup
var popup=L.popup();
		
// create a function which displays a pop-up once the user clicks on the map
// the pop-up shows the coordinates of the point clicked by the user
function onMapClick(e) {
	popup.setLatLng(e.latlng).setContent("Coordinates for clicked point " + e.latlng.toString()).openOn(mymap);
	}

// add the click event detector to the map
// the click event uses the onMapClick function to show the pop-up
mymap.on('click', onMapClick);